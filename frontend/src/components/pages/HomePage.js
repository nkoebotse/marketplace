import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import ProductList from '../Product/ProductList';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Help centre', href: '#', current: false },
  { name: 'sell ', href: '#', current: false },
 
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const HomePage = () => {
  const [role, setRole] = useState(localStorage.getItem('role')); // Store role from localStorage
  const [userName, setUserName] = useState(localStorage.getItem('username')); // Store username from localStorage
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    setRole(null);
    setUserName(null);
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <div>
      {/* Mobile-Responsive Navigation */}
      <Disclosure as="nav" className="bg-blue-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-blue-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                  onClick={()=>{ window.location.href="/cart" }}
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View cart</span>
                <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* User Icon Dropdown (Login/Register or Logged-in User Info) */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-blue-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {/* Show "Logged in as" */}
                  <div className="px-4 py-2 text-sm text-gray-700">
                    {role ? `Logged in as ${role}` : 'Not logged in'}
                  </div>

                  {/* Show logout option if user is logged in */}
                  {role && (
                    <MenuItem>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </MenuItem>
                  )}

                  {/* Show login/register if not logged in */}
                  {!role && (
                    <>
                      <MenuItem>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Login
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to="/register"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Register
                        </Link>
                      </MenuItem>
                    </>
                  )}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
            {/* Mobile Login/Register Links */}
            {!role ? (
              <>
                <Link to="/login">
                  <DisclosureButton className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">
                    Login
                  </DisclosureButton>
                </Link>
                <Link to="/register">
                  <DisclosureButton className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">
                    Register
                  </DisclosureButton>
                </Link>
              </>
            ) : (
              <DisclosureButton
                onClick={handleLogout}
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </DisclosureButton>
            )}
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* Page Content */}
      <div className="mt-0">
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
