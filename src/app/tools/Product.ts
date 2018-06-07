import { Sku} from './Sku';
import { Imgurl } from './Imgurl';
export class Product {
    current_price: string;
    images:Array<Imgurl>;
    name: string;
    original_price:string;
    product_id:string;
    sku:Array<Sku>;
  }