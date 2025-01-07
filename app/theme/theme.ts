// theme.ts
const theme = {
  components: {
    Label: {
      variants: {
        header: {
          fontSize: 24,
          fontWeight: 'bold',
          color: 'black'
        },
        body: {
          fontSize: 15,
          fontWeight: 'normal',
          color: 'gray'
        },
        caption: {
          fontSize: 12,
          fontWeight: 'light',
          color: 'darkgray'
        }
      },
      defaultProps: {
        variant: 'body' // Default variant
      }
    }
  }
};

export default theme;
