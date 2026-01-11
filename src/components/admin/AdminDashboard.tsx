'use client';

import { useState } from 'react';
import { LogOut, Package, FolderTree, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AdminProductList } from './AdminProductList';
import { AdminCategoryList } from './AdminCategoryList';

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'products' | 'categories'>('products');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gids-blue">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Manage products and categories</p>
            </div>
            <Button
              variant="outline"
              onClick={onLogout}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-4 py-3 border-b-2 font-medium transition-colors ${
                activeTab === 'products'
                  ? 'border-gids-blue text-gids-blue'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Package className="h-4 w-4 inline mr-2" />
              Products
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-4 py-3 border-b-2 font-medium transition-colors ${
                activeTab === 'categories'
                  ? 'border-gids-blue text-gids-blue'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderTree className="h-4 w-4 inline mr-2" />
              Categories
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'products' && <AdminProductList />}
        {activeTab === 'categories' && <AdminCategoryList />}
      </main>
    </div>
  );
}
