export default importProductImages = () => {
    const context = require.context('../../Assets/Images/Products', false, /\.(png|jpe?g|svg)$/);
    return context.keys().map(context);
  };
  

  