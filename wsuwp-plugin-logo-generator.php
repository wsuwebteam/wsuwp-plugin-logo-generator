<?php
/**
 * Plugin Name: WSUWP Logo Generator
 * Plugin URI: https://github.com/wsuwebteam/wsuwp-plugin-logo-generator
 * Description: Adds a Gutenberg block for generatoring WSU Logos
 * Version: 0.0.1.3
 * Requires PHP: 7.0
 * Author: Washington State University, Dan White
 * Author URI: https://web.wsu.edu/
 * Text Domain: wsuwp-plugin-logo-generator
 */


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Initiate plugin
require_once __DIR__ . '/includes/plugin.php';
