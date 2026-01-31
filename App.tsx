
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import TopAppBar from './components/TopAppBar.tsx';
import SearchBar from './components/SearchBar.tsx';
import Carousel from './components/Carousel.tsx';
import CategoryCard from './components/CategoryCard.tsx';
import ProductCard from './components/ProductCard.tsx';
import BottomNav from './components/BottomNav.tsx';
import { PRODUCTS, CATEGORIES } from './constants.ts';
import { View, CartItem, Product } from './types.ts';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('snackmart_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('snackmart_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  // Persistence
  useEffect(() => {
    localStorage.setItem('snackmart_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('snackmart_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCheckedOut(false);
  }, []);

  const toggleFavorite = useCallback((productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const renderHome = () => (
    <>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      
      {!searchQuery && !selectedCategory && <Carousel />}
      
      <div className="px-4">
        <div className="flex items-center justify-between pb-2 pt-4">
          <h3 className="text-[#1b140d] dark:text-white text-lg font-extrabold leading-tight tracking-tight">Categories</h3>
          <button 
            onClick={() => setSelectedCategory(null)}
            className="text-primary text-xs font-bold uppercase tracking-widest cursor-pointer flex items-center gap-1 hover:opacity-70"
          >
            Clear {selectedCategory && 'Filter'}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {CATEGORIES.map(cat => (
            <CategoryCard 
              key={cat.id} 
              category={cat} 
              isActive={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(prev => prev === cat.id ? null : cat.id)}
            />
          ))}
        </div>
      </div>

      <div className="px-4 mt-8">
        <div className="flex items-center gap-2 pb-4">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
            {selectedCategory ? 'filter_list' : 'local_fire_department'}
          </span>
          <h3 className="text-[#1b140d] dark:text-white text-lg font-extrabold leading-tight tracking-tight">
            {selectedCategory ? CATEGORIES.find(c => c.id === selectedCategory)?.name : 'Trending Now'}
          </h3>
          <span className="text-[10px] text-[#9a734c] font-bold ml-auto">{filteredProducts.length} items</span>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAdd={addToCart}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={() => toggleFavorite(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center">
            <span className="material-symbols-outlined text-5xl text-[#9a734c] opacity-20 mb-4">search_off</span>
            <p className="text-[#9a734c] font-bold">No snacks found matching your criteria</p>
          </div>
        )}
      </div>
    </>
  );

  const renderCart = () => {
    if (isCheckedOut) {
      return (
        <div className="flex flex-col items-center justify-center py-24 px-8 text-center animate-in fade-in zoom-in duration-300">
          <div className="bg-green-100 dark:bg-green-900/30 p-10 rounded-full mb-8">
            <span className="material-symbols-outlined text-7xl text-green-500 animate-bounce">check_circle</span>
          </div>
          <h3 className="text-2xl font-black mb-3">ORDER SUCCESS!</h3>
          <p className="text-[#9a734c] dark:text-[#c4a68a] mb-8">Your snacks are being prepared and will be delivered shortly.</p>
          <button 
            onClick={() => { setIsCheckedOut(false); setCurrentView('home'); }}
            className="bg-primary text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-500/25 active:scale-95 transition-all"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      );
    }

    return (
      <div className="px-4 pt-4 animate-in slide-in-from-right duration-300">
        <h3 className="text-[#1b140d] dark:text-white text-xl font-black mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">shopping_bag</span>
          Your Basket
        </h3>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-[#9a734c] dark:text-[#c4a68a]">
            <div className="bg-[#f3ede7] dark:bg-[#3d2f21] p-8 rounded-full mb-6">
              <span className="material-symbols-outlined text-7xl opacity-40">production_quantity_limits</span>
            </div>
            <p className="font-bold text-lg mb-2 text-[#1b140d] dark:text-white">Your cart is empty</p>
            <p className="text-sm opacity-80 text-center max-w-[200px]">Looks like you haven't added any snacks yet.</p>
            <button 
              onClick={() => setCurrentView('home')}
              className="mt-8 bg-primary text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-orange-500/20 active:scale-95 transition-transform"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map(item => (
              <div key={item.id} className="flex gap-4 bg-white dark:bg-[#2d2218] p-3 rounded-2xl shadow-sm border border-[#e7dbcf] dark:border-[#4d3a2a]">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm leading-tight text-[#1b140d] dark:text-white">{item.name}</h4>
                    <p className="text-xs text-[#9a734c] dark:text-[#c4a68a] mt-0.5">{item.weight}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-primary font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    <div className="flex items-center gap-1 bg-[#f3ede7] dark:bg-[#3d2f21] rounded-lg p-0.5">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-1 rounded-md hover:bg-white dark:hover:bg-[#4d3a2a] transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-1 rounded-md hover:bg-white dark:hover:bg-[#4d3a2a] transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-[#9a734c] hover:text-red-500 self-start mt-1 transition-colors">
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>
            ))}
            <div className="mt-8 border-t border-[#e7dbcf] dark:border-[#4d3a2a] pt-4 pb-12">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[#9a734c] dark:text-[#c4a68a] font-bold">Subtotal Amount</span>
                <span className="text-2xl font-black text-[#1b140d] dark:text-white">
                  ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                </span>
              </div>
              <button 
                onClick={() => { setCart([]); setIsCheckedOut(true); }}
                className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-orange-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                PROCEED TO CHECKOUT
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderSaved = () => {
    const savedProducts = PRODUCTS.filter(p => favorites.includes(p.id));
    return (
      <div className="px-4 pt-4 animate-in slide-in-from-right duration-300">
        <h3 className="text-[#1b140d] dark:text-white text-xl font-black mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-red-500" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          Saved Items
        </h3>
        {savedProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {savedProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAdd={addToCart}
                isFavorite={true}
                onToggleFavorite={() => toggleFavorite(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-[#9a734c] dark:text-[#c4a68a]">
            <div className="bg-[#f3ede7] dark:bg-[#3d2f21] p-10 rounded-full mb-6">
              <span className="material-symbols-outlined text-7xl opacity-30">heart_broken</span>
            </div>
            <p className="font-bold text-lg mb-2">No favorites yet</p>
            <p className="text-sm opacity-80 text-center max-w-[200px]">Save your favorite snacks to find them quickly later.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[430px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl pb-24 overflow-x-hidden">
      <TopAppBar />
      
      <main className="flex-1">
        {currentView === 'home' && renderHome()}
        {currentView === 'cart' && renderCart()}
        {currentView === 'saved' && renderSaved()}
        {currentView === 'catalog' && renderOther('Catalog', 'dashboard')}
        {currentView === 'profile' && renderOther('Your Profile', 'person')}
      </main>

      <BottomNav 
        currentView={currentView} 
        onViewChange={(view) => {
          setCurrentView(view);
          setIsCheckedOut(false);
        }} 
        cartCount={cartCount}
      />
    </div>
  );
};

const renderOther = (title: string, icon: string) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] px-8 text-center animate-in fade-in duration-500">
    <div className="bg-primary/5 p-10 rounded-full mb-6 border border-primary/10">
      <span className="material-symbols-outlined text-8xl text-primary opacity-20">{icon}</span>
    </div>
    <h3 className="text-[#1b140d] dark:text-white text-2xl font-black mb-3">{title.toUpperCase()}</h3>
    <p className="text-[#9a734c] dark:text-[#c4a68a] leading-relaxed">We're crafting an exclusive experience for this section. Coming soon!</p>
  </div>
);

export default App;
