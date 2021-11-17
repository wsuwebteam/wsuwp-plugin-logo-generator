<?php namespace WSUWP\Plugin\Blocks\LogoGenerator;

class BlockLogo {

	public static function render_logo( $attributes, $content ) {

		global $post;

		$auth_key = get_post_meta( $post->ID, 'wsuwp_logo_auth_key', true );
		$auth_key_param = isset( $_GET['auth_key'] ) ? esc_html( $_GET['auth_key'] ) : '';

		$attributes['is_valid'] = ( current_user_can( 'publish_posts', $post->ID ) || ( isset( $auth_key, $auth_key_param ) && $auth_key_param === $auth_key ) ) ? true : false;
		$attributes['author'] = get_user_by( 'ID', $post->post_author );

		ob_start();

		include Plugin::get( 'template_dir' ) . '/block-logo.php';

		return ob_get_clean();

	}


	public static function register_block() {

		register_block_type(
			'wsuwp/logo-generator',
			array(
				'render_callback' => array( __CLASS__, 'render_logo' ),
				'api_version' => 2,
				'editor_script' => 'wsuwp-plugin-logo-generator-editor-scripts',
				'editor_style' => 'wsuwp-plugin-logo-generator-editor-styles',
			)
		);

	}


	public static function init() {

		add_action( 'init', __CLASS__ . '::register_block' );

	}
}

BlockLogo::init();
