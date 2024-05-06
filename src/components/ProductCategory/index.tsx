import './styles.css';

type props = {
  name:string;
}

export default function ProductCategory({name}:props) {
  return <div className="dsc-category">
    {name}
    </div>;
}
