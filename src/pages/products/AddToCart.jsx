import { RiDeleteBin6Line } from "react-icons/ri";

const AddToCart = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="overflow-x-auto">
        <table className="table shadow-lg">
          {/* head */}
          <thead>
            <tr>
              <th>CHECKBOX</th>
              <th>PRODUCT NAME</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>100.00 TK</td>
              <td>2</td>
              <td>200.00 TK</td>
              <td className="text-red-500 text-2xl">
                <button>
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>100.00 TK</td>
              <td>2</td>
              <td>200.00 TK</td>
              <td className="text-red-500 text-2xl">
                <button>
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>100.00 TK</td>
              <td>2</td>
              <td>200.00 TK</td>
              <td className="text-red-500 text-2xl">
                <button>
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>100.00 TK</td>
              <td>2</td>
              <td>200.00 TK</td>
              <td className="text-red-500 text-2xl">
                <button>
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-5 flex justify-between">
          <button className="btn btn-accent">CONTINUE SHOPPING</button>
          <button className="btn btn-error">CLEAR CART</button>
        </div>
        <div className="mt-5 flex-col justify-end">
          <h2 className="py-2">
            Subtotal: <span>200.00TK</span>
          </h2>

          <p className="border-b-2 w-36 pb-2">
            Shipping Fee: <span>50TK</span>
          </p>
          <p className="pt-2">
            Order Total: <span>250.00TK</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
