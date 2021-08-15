<?php
if(get_theme_mod('jot_shop_disable_product_slide_sec',false) == true){
    return;
  }
?>

<section class="thunk-product-slide-section">
    <?php jot_shop_display_customizer_shortcut( 'jot_shop_product_slide_section' ); ?>
  <div class="thunk-heading-wrap">
  <div class="thunk-heading">
    <h4 class="thunk-title">
    <span class="title"><?php echo esc_html(get_theme_mod('jot_shop_product_slider_heading','Product Carousel'));?></span>
   </h4>
</div>
</div>
<div class="content-wrap">
    <div class="thunk-slide thunk-product-slide owl-carousel">
      <?php    
          $term_id = get_theme_mod('jot_shop_product_slider_cat');  
          $prdct_optn = get_theme_mod('jot_shop_product_slide_optn','recent');
          jot_shop_product_cat_filter_default_loop($term_id,$prdct_optn); 
      ?>
    </div>
  </div>
</section>