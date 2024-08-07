const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context("../../../Assets/Images/Staff", false, /\.(png|jpe?g|svg)$/)
);

const imageObjects = images.map((image, index) => ({
  original: image.default,
  originalAlt: `Image ${index + 1}`,
}));

export default imageObjects;
