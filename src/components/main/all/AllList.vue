<template>
        <div class="swiper-container marginTop">
			    <div class="swiper-wrapper">
				        <div class="swiper-slide">
				        	<div class="con_div" v-for="item in $store.state.brother">
								<a href="">
									<div class="con_img"><img :src="item.thum_min_promotion_photo" alt="" /></div>
									<div>
										<p class="p_1">{{item.product_name}}</p>
										<p class="p_2">{{item.product_desc}}</p>
										<p class="p_3">{{item.volume}}</p>
										<p class="p_4">
											<span>￥</span>
											<span>{{item.price}}</span>
											<span>明日达</span>
											<i class="iconfont">&#xe660;</i>
										</p>
									</div>			
								</a>
							 </div>	
				        </div>
				
			    </div>
		</div>
</template>

<script>

	export default{
		name :"AllList",
		updated(){
			var mySwiper = new Swiper ('.swiper-container', {				   
				    loop: false,
				 }) 	  
		}
	}
</script>

<style scoped="scoped">
	.marginTop{
		margin-top:1.3rem;	
		
	}
	.con-div{
		width:100%;
        height: 1.06rem;
        padding:0.1rem;	
	}
    a{
    	border-bottom: 1px solid #ccc;
    	margin:0.1rem;
    	display: flex;
    	
    }
    .p_1{
    	color:#3a3a3a;
    	font-size:0.14rem;
    }
     .p_2{
    	color:#878787;
    	font-size:0.12rem;
    }
    .p_3{
    	color:#878787;
    	font-size:0.12rem;
    	margin-top: 0.12rem;
    }
    .p_4{
    	color:#ff8000;
    }
    span{
    	margin-right: 0.04rem;
    }
    .p_4 span:nth-child(3){
    	display: inline-block;
    	width:0.4rem;
    	height: 0.18rem;
    	background: #ff8000;
    	color:#fff;
    	text-align: center;
    }
    .iconfont{
    	margin-left:0.9rem;
    	font-size:0.22rem;
    }
    .swiper-slide{
    	height: auto;
    }
</style>