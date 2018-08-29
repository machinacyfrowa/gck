<?php	do_action('eventon_before_main_content');?>	
	<div class='evo_page_body'>
 
		<?php do_action('eventon_single_content_wrapper');?>
 
			<?php /* The loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
 
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
 
					<div class="entry-content">
 
					<?php	
						do_action('eventon_single_content');
					?>		
					</div><!-- .entry-content -->
 
					<footer class="entry-meta">
						<?php edit_post_link( __( 'Edit', 'twentythirteen' ), '<span class="edit-link">', '</span>' ); ?>
					</footer><!-- .entry-meta -->
				</article><!-- #post -->
			<?php endwhile; ?>
	
		<?php	do_action('eventon_single_sidebar');	?>
 
		<?php	do_action('eventon_single_after_loop');	?>
 
	</div><!-- #primary -->
	<div class="clear"></div>
<?php 	do_action('eventon_after_main_content'); ?>