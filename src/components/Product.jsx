export default function Product({ id, img, productName, Price }) {
  return (
    <div className="meal-item">
      <div>
        <img src={img} alt="product-img" />
      </div>
      <div>{productName}</div>
    </div>
  );
}
