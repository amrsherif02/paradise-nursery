import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: 'Snake Plant',
    price: 15,
    category: 'Indoor Plants',
    image:
      'https://images.unsplash.com/photo-1593482892290-f54927ae2c65?w=400',
    description: 'A beautiful, low-maintenance indoor plant.',
  },
  {
    id: 2,
    name: 'Monstera Deliciosa',
    price: 25,
    category: 'Indoor Plants',
    image:
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400',
    description: 'A tropical plant with distinctive split leaves.',
  },
  {
    id: 3,
    name: 'Peace Lily',
    price: 20,
    category: 'Indoor Plants',
    image:
      'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400',
    description: 'An elegant green plant with beautiful flowers.',
  },
  {
    id: 4,
    name: 'Rubber Plant',
    price: 22,
    category: 'Indoor Plants',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400',
    description: 'A striking plant with glossy green leaves.',
  },
  {
    id: 5,
    name: 'Areca Palm',
    price: 30,
    category: 'Indoor Plants',
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=400',
    description: 'A tropical palm that adds a fresh atmosphere.',
  },
  {
    id: 6,
    name: 'Golden Pothos',
    price: 18,
    category: 'Indoor Plants',
    image:
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400',
    description: 'A trailing plant with attractive green leaves.',
  },

  // Succulents
  {
    id: 7,
    name: 'Echeveria',
    price: 10,
    category: 'Succulents',
    image:
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400',
    description: 'A compact succulent with a beautiful rosette shape.',
  },
  {
    id: 8,
    name: 'Aloe Vera',
    price: 12,
    category: 'Succulents',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400',
    description: 'A popular succulent with thick, fleshy leaves.',
  },
  {
    id: 9,
    name: 'Jade Plant',
    price: 14,
    category: 'Succulents',
    image:
      'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400',
    description: 'A charming succulent with rounded green leaves.',
  },
  {
    id: 10,
    name: 'Haworthia',
    price: 11,
    category: 'Succulents',
    image:
      'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400',
    description: 'A small succulent ideal for desks and shelves.',
  },
  {
    id: 11,
    name: 'Echinopsis Cactus',
    price: 13,
    category: 'Succulents',
    image:
      'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400',
    description: 'A distinctive cactus that needs little watering.',
  },
  {
    id: 12,
    name: 'String of Pearls',
    price: 19,
    category: 'Succulents',
    image:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400',
    description: 'A trailing succulent with bead-like leaves.',
  },

  // Flowering Plants
  {
    id: 13,
    name: 'Orchid',
    price: 28,
    category: 'Flowering Plants',
    image:
      'https://images.unsplash.com/photo-1566907225472-514f4c8e9f26?w=400',
    description: 'An elegant flowering plant with delicate blooms.',
  },
  {
    id: 14,
    name: 'Anthurium',
    price: 24,
    category: 'Flowering Plants',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400',
    description: 'A tropical plant known for its colorful flowers.',
  },
  {
    id: 15,
    name: 'African Violet',
    price: 16,
    category: 'Flowering Plants',
    image:
      'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400',
    description: 'A compact flowering plant for indoor spaces.',
  },
  {
    id: 16,
    name: 'Kalanchoe',
    price: 17,
    category: 'Flowering Plants',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400',
    description: 'A colorful flowering plant with fleshy leaves.',
  },
  {
    id: 17,
    name: 'Bromeliad',
    price: 26,
    category: 'Flowering Plants',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400',
    description: 'A tropical plant with a vibrant central flower.',
  },
  {
    id: 18,
    name: 'Peace Lily Flower',
    price: 21,
    category: 'Flowering Plants',
    image:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400',
    description: 'A graceful plant with delicate white blooms.',
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [
    'Indoor Plants',
    'Succulents',
    'Flowering Plants',
  ];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-list">
      <h1>Our Houseplants</h1>

      <p className="product-intro">
        Discover the perfect plants to bring life and beauty into your home.
      </p>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section className="plant-category" key={category}>
            <h2>{category}</h2>

            <div className="plant-grid">
              {categoryPlants.map((plant) => {
                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <article className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <div className="plant-info">
                      <h3>{plant.name}</h3>

                      <p>{plant.description}</p>

                      <p className="plant-price">
                        ${plant.price.toFixed(2)}
                      </p>

                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                        className="add-to-cart-button"
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProductList;