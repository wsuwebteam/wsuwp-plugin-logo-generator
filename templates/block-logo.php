<?php
if ( true === $attributes['is_valid'] ) {
	echo $content;
} else {
	$email = $attributes['author']->data->user_email;
	?>
	<p>
		<b>Access Denied:</b> Missing or invalid authenication key.
		Please contact <a href="mailto:<?php echo esc_html( $email ) ?>"><?php echo esc_html( $email ) ?></a> for assistance.
	</p>
	<?php
}
?>
