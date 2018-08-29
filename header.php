<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
	<!-- Import Lato font -->
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="<?php echo get_bloginfo( 'template_directory' );?>/style.css" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title><?php echo get_bloginfo( 'name' ); ?></title>
    <?php wp_head();?>
  </head>
  <body <?php body_class(); ?>>
	  <div class="container">
	  <nav class="navbar sticky-top navbar-expand-md">
		  <a class="navbar-brand col-md-2" href="<?php echo get_home_url(); ?>">
		  	<img class="img-fluid" src="http://gck.machinacyfrowa.pl/wp-content/uploads/2018/08/logo_02.jpg">
		  </a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <?php
		  wp_nav_menu( array(
			'theme_location'  => 'header-menu',
			'depth'	          => 2, // 1 = no dropdowns, 2 = with dropdowns.
			'container'       => 'div',
			'container_class' => 'collapse navbar-collapse col-md-6 ml-auto',
			'container_id'    => 'navbarSupportedContent',
			'menu_class'      => 'navbar-nav mr-auto',
			'fallback_cb'     => 'WP_Bootstrap_Navwalker::fallback',
			'walker'          => new WP_Bootstrap_Navwalker(),
			) );
		  ?>
	  </nav>
    
