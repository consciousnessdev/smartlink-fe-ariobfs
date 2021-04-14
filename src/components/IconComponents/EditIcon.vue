<template>
  <g>
    <path
      d="M9.16662 3.33337H3.33329C2.89126 3.33337 2.46734 3.50897 2.15478 3.82153C1.84222 4.13409 1.66663 4.55801 1.66663 5.00004V16.6667C1.66663 17.1087 1.84222 17.5327 2.15478 17.8452C2.46734 18.1578 2.89126 18.3334 3.33329 18.3334H15C15.442 18.3334 15.8659 18.1578 16.1785 17.8452C16.491 17.5327 16.6666 17.1087 16.6666 16.6667V10.8334"
      :stroke="strokeColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill-opacity="0.0"
    />
    <path
      d="M15.4166 2.08332C15.7481 1.7518 16.1978 1.56555 16.6666 1.56555C17.1355 1.56555 17.5851 1.7518 17.9166 2.08332C18.2481 2.41484 18.4344 2.86448 18.4344 3.33332C18.4344 3.80216 18.2481 4.2518 17.9166 4.58332L9.99996 12.5L6.66663 13.3333L7.49996 9.99999L15.4166 2.08332Z"
      :stroke="strokeColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill-opacity="0.0"
    />
  </g>
</template>

<script>
export default {
  props: {
    iconStroke: {
      type: String,
      // default: '#206CFF'
      required: false
    }
  },
  data() {
    return {
      strokeColor: ''
    }
  },
  mounted() {
    if(this.iconStroke && this.iconStroke !== "") {
      if(this.iconStroke === "danger") {
        this.strokeColor = '#EB5757'
      }
    }else{
      this.strokeColor = '#206CFF'
    }
  }
}
</script>