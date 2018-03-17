<template>
	<div class="box">
		<div class="address_top">
			<i class="iconfont">&#xe606;</i>
			<span>新增收货地址</span>
		</div>
		<div class="meg">
			<label for="">收货人</label><input type="text" placeholder="收货人"/>
		</div>
		<div class="meg">
			<label for="">收货地址</label><span></span>
		</div>
		<div class="meg">
			<label for="">收货地址</label><span></span>
		</div>
		<div class="detail_address"></div>
		<div class="meg">
			<label for="">门号</label><input type="text" placeholder="例71号501室"/>
		</div>	
		<div class="meg">
			<label for="">类型(选填)</label><input type="radio"/>家<input type="radio"/>公司
		</div>
		<button class="btn">保存并使用</button>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.box{
		width:100%;
		margin: 0;
	    font-size: .14rem;
	    background: #f5f5f5;
	}
	.address_top{
		background: #fff;
	    color: #75a739;
	    height: .45rem;
	    line-height: .43rem;
	    border-bottom: .01rem solid #d8d8d8;
	}
	.meg{
		margin-right: .1rem;
	    text-align: left;
	    padding-left: .1rem;
	}
	.btn{
		width: 78.6%;
	    border-radius: .06rem .06rem .06rem .06rem;
	    margin-left: auto;
	    margin-right: auto;
	    margin-top: .3rem;
	}
</style>