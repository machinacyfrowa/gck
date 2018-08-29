<?php
// Register Custom Navigation Walker
require_once get_template_directory() . '/class-wp-bootstrap-navwalker.php';

function register_my_menus() {
  register_nav_menus(
    array(
      'header-menu' => __( 'Header menu' ),
      'social-menu' => __( 'Social network menu' )
     )
   );
 }
 add_action( 'init', 'register_my_menus' );
?>