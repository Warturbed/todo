<template>
    <button class="category__delete">
		<svg viewBox="0 0 48 48" width="25px" height="25px" fill="none" stroke="#666" stroke-width="3px" >
            <defs>
            </defs>
            <rect class="cls-1" height="46" rx="4" ry="4" width="46" x="1" y="1"/>
            <line class="cls-1" x1="12" x2="36" y1="12" y2="36"/>
            <line class="cls-1" x1="12" x2="36" y1="36" y2="12"/>
		</svg>
	</button>
</template>

<script>

export default {
  name: 'DeleteButton',
  props: {
	item_data: Object,
	name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.category {
	&__delete {
		z-index: 2;
		border: none;
		background: transparent;
		width: 25px;
		height: 25px;
		cursor: pointer;
		position: absolute;
		right: 15px;
	}
}
</style>