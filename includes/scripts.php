<?php namespace WSUWP\Plugin\Blocks\LogoGenerator;

class Scripts {

	public static function register_block_editor_assets() {

		$editor_asset = include Plugin::get( 'plugin_dir' ) . 'assets/dist/editor.asset.php';

		wp_register_script(
			'wsuwp-plugin-logo-generator-editor-scripts',
			Plugin::get( 'plugin_url' ) . 'assets/dist/editor.js',
			$editor_asset['dependencies'],
			$editor_asset['version']
		);

		wp_register_style(
			'wsuwp-plugin-logo-generator-editor-styles',
			Plugin::get( 'plugin_url' ) . 'assets/dist/editor.css',
			array(),
			$editor_asset['version']
		);

	}

	public static function enqueue_frontend_assets() {

		if ( is_singular() ) {
			$editor_asset = include Plugin::get( 'plugin_dir' ) . 'assets/dist/front-end.asset.php';

			wp_register_script(
				'wsuwp-plugin-logo-generator-scripts',
				Plugin::get( 'plugin_url' ) . 'assets/dist/front-end.js',
				array(),
				$editor_asset['version'],
				true
			);

			wp_register_style(
				'wsuwp-plugin-logo-generator-styles',
				Plugin::get( 'plugin_url' ) . 'assets/dist/style-front-end.css',
				array(),
				$editor_asset['version']
			);

			$id = get_the_ID();

			if ( has_block( 'wsuwp/logo-generator', $id ) ) {
				wp_enqueue_script( 'wsuwp-plugin-logo-generator-scripts' );
				wp_enqueue_style( 'wsuwp-plugin-logo-generator-styles' );
			}
		}

	}

	public static function init() {
		add_action( 'enqueue_block_assets', __CLASS__ . '::enqueue_frontend_assets' );
		add_action( 'init', __CLASS__ . '::register_block_editor_assets' );
	}
}

Scripts::init();
