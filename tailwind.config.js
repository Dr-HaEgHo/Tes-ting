module.exports = {
  content: [
    './dist/*.html',
  ],
  theme: {
    extend: {

      spacing:{
        '85%':'85%',
        '75%':'75%',
        '30%':'30%',
        '25%':'25%',
      },

      backgroundImage:{
        starry:'url(/dist/img/tehihi)'
      },

      colors:{
        darkbg:'#171c23',
        lightbg:'#a6c1ff',
        darkred:'#450000',

      },

      fontFamily:{
        Poppins: 'Poppins, sans-serif',
      }


      
    },

    container:{
      center:true,
      padding: '4rem',
    },
    
  },
  plugins: [],
}
