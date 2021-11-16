<?php namespace WSUWP\Plugin\Blocks\LogoGenerator;

class PostTypeLogo {

	private static $slug = 'logo';

	private static $attributes = array(
		'labels'        => array(
			'name'          => 'Logos',
			'singular_name' => 'Logo',
		),
		'description'   => '',
		'public'        => true,
		'show_in_rest'  => true,
		'menu_position' => 4,
		'menu_icon'     => 'dashicons-art',
		'supports'      => array(
			'title',
			'editor',
		),
		'template' => array(
			array(
				'wsuwp/logo-generator',
				array(),
			),
		),
		'template_lock' => 'insert',
	);


	public static function create_auth_key( $post_id ) {
		$uuid = wp_generate_uuid4();

		if ( ! add_post_meta( $post_id, 'wsuwp_logo_auth_key', $uuid, true ) ) {
			update_post_meta( $post_id, 'wsuwp_logo_auth_key', $uuid );
		}

		return $uuid;
	}


	public static function notify_author( $post, $uuid ) {

		$author = get_user_by( 'ID', $post->post_author );
		$link = add_query_arg(
			'auth_key',
			$uuid,
			get_permalink( $post )
		);

		$to = $author->data->user_email;
		$subject = 'WSU Logo Is Ready';
		$headers = array(
			'From: WSU Logo Generator <noreply@wsu.edu>',
		);
		$body = 'The "' . $post->post_title . "\" logo has been published.\r\n\n" .
				"Find the logo at:\r\n" .
				$link . "\r\n\n" .
				'Note: The logo cannot be accessed without the authentication key found in the URL. Please retain a copy of the URL and share it with your team members.';

		wp_mail( $to, $subject, $body, $headers );

	}


	public static function on_status_change( $new_status, $old_status, $post ) {

		if ( $old_status !== $new_status && 'publish' === $new_status ) {

			$auth_key = self::create_auth_key( $post->ID );
			self::notify_author( $post, $auth_key );

		}

	}


	public static function register_post_type() {

		register_post_type( self::$slug, self::$attributes );

	}


	public static function init() {

		add_action( 'init', __CLASS__ . '::register_post_type' );
		add_action( 'transition_post_status', __CLASS__ . '::on_status_change', 10, 3 );

	}
}

PostTypeLogo::init();
