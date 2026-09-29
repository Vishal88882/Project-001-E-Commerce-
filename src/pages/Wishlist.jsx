
import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { ThemeContext } from '../context/ThemeContext'

const Wishlist = () => {

  const { wishlist, handleWishlist, RemovedItem } = useContext(WishlistContext);
  const { handleCart } = useContext(CartContext);
  const {theme} = useContext(ThemeContext);

  return (

    <div className="min-h-screen w-full bg-white dark:bg-black dark:text-white px-5 py-10">

      {wishlist.length === 0 ? (

        <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">

          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-purple-50 text-5xl text-purple-600 shadow-sm">
            ♡
          </div>

          <h1 className="text-3xl sm:text-4xl font-black dark:text-white text-zinc-900">
            Your Wishlist is Empty
          </h1>

          <p className="mt-3 max-w-md text-sm font-medium text-zinc-500">
            Save your favorite products here and come back whenever you want.
          </p>

          <Link
            to="/products"
            className="mt-7 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-purple-200 transition duration-300 hover:scale-105"
          >
            Explore Products →
          </Link>

        </div>

      ) : (

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div>
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-2xl text-purple-600"> ♡</div>
                     <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600">  Your Collection </p>
                  <h1 className="text-3xl sm:text-4xl font-black dark:text-white text-zinc-900"> My Wishlist </h1>
                </div>
              </div>

              <p className="ml-1 text-sm font-medium dark:text-white  text-zinc-500">
         {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved </p>
            </div>
            <Link
              to="/products"
              className="w-fit rounded-xl border border-purple-200 bg-purple-50 px-5 py-3 text-sm font-bold text-purple-600 transition duration-300 hover:bg-purple-600 hover:text-white"
            > ← Continue Shopping</Link>
          </div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlist.map(({
              title,
              id,
              price,
              description,
              rating,
              thumbnail,
              category
            }) => {
              return (
                <div
                  key={id}
                  className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100 dark:bg-black dark:text-white"
                >

                  <div className="relative m-3 flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-50 via-white to-purple-50 dark:from-black dark:via-[#0d0d0d] dark:to-[#1a1025] ">

                    <span className="absolute left-3 top-3 z-10 rounded-full bg-purple-600 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                      NEW
                    </span>

                    <button
                      onClick={() =>
                        handleWishlist({
                          id,
                          title,
                          price,
                          description,
                          thumbnail,
                          category,
                          rating
                        })
                      }
                      className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-red-500 shadow-md transition duration-300 hover:scale-110 hover:bg-red-500 dark:bg-black dark:text-white hover:text-white"
                    >
                      ♥
                    </button>

                    <img
                      src={thumbnail}
                      alt={title}
                      className="h-40 w-40 object-contain transition duration-500 group-hover:scale-110"
                    />

                  </div>

                  <div className="px-5 pb-5">

                    <span className="inline-block rounded-full bg-purple-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide dark:text-white text-purple-600">
                      {category}
                    </span>

                    <h2 className="mt-3 truncate text-base font-extrabold dark:text-red-600 text-zinc-900">
                      {title}
                    </h2>


                    {/* Rating */}

                    <div className="mt-2 flex items-center gap-2">

                      <span className="text-sm font-bold text-yellow-500">
                        ★ {rating}
                      </span>

                      <span className="text-xs font-medium text-zinc-400">
                        Customer Rating
                      </span>

                    </div>


                    {/* Price + Cart */}

                    <div className="mt-5 flex items-end justify-between">

                      <div>

                        <p className="text-[11px] dark:text-red-600 font-medium text-zinc-400">
                          Price
                        </p>

                        <p className="text-2xl font-black dark:text-white text-zinc-900">
                          ${price}
                        </p>

                      </div>

                      <button
                        onClick={() =>
                          handleCart({
                            id,
                            title,
                            price,
                            description,
                            thumbnail,
                            rating
                          })
                        }
                        className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-purple-200 transition duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        🛒 Add to Cart
                      </button>

                    </div>


                    {/* Bottom Buttons */}

                    <div className="mt-4 grid grid-cols-2 gap-3">

                      <Link
                        to={`/products/${id}`}
                        className="rounded-xl border border-zinc-200 bg-white py-2.5 text-center text-xs font-bold text-zinc-600 transition duration-300 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600"
                      >
                        View Details
                      </Link>

                      <button
                        onClick={() => RemovedItem({ id })}
                        className="rounded-xl border border-red-100 bg-red-50 py-2.5 text-xs font-bold text-red-500 transition duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              )
            })}

          </div>

        </div>

      )}

    </div>
  )
}

export default Wishlist
