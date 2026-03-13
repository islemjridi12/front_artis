import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { routes } from '../../core.index';
import { SideBar, SideBarMenu } from '../../../shared/model/page.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private collapseSubject = new BehaviorSubject<boolean>(false);
  collapse$ = this.collapseSubject.asObservable();

  toggleCollapse() {
    this.collapseSubject.next(!this.collapseSubject.value);
  }

  public sideBarPosition: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('sideBarPosition') || 'false'
  );

  public toggleMobileSideBar: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      localStorage.getItem('isMobileSidebar') || 'false'
    );

  public expandSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public switchSideMenuPosition(): void {
    if (localStorage.getItem('sideBarPosition')) {
      this.sideBarPosition.next('false');
      this.expandSideBar.next(true);
      localStorage.removeItem('sideBarPosition');
    } else {
      this.sideBarPosition.next('true');
      this.expandSideBar.next(false);
      localStorage.setItem('sideBarPosition', 'true');
    }
  }

  public switchMobileSideBarPosition(): void {
    if (localStorage.getItem('isMobileSidebar')) {
      this.toggleMobileSideBar.next('false');
      localStorage.removeItem('isMobileSidebar');
    } else {
      this.toggleMobileSideBar.next('true');
      localStorage.setItem('isMobileSidebar', 'true');
    }
  }

  public sidebarData1 = [
    {
      tittle: 'Main',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      showSubRoute: true,
      menu: [
        {
          menuValue: 'Dashboard',
          hasSubRoute: true,
          showSubRoute: false,
          icon2: 'layout-grid',
          base: 'dashboard',

          subMenus: [
            {
              menuValue: 'Admin Dashboard',
              route: routes.index,
              base: 'index'
            },

          ],
        },
      ],
    },
    {
      tittle: 'Inventory',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Products',
          icon: 'box',
          route: routes.productList,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Low Stocks',
          icon2: 'trending-up-2',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.lowStock,
          subRoutes: [],
        },
        {
          menuValue: 'Category',
          icon2: 'list-details',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.categoryList,
          subRoutes: [],
        },
        {
          menuValue: 'Sub Category',
          icon2: 'carousel-vertical',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.subCategories,
          subRoutes: [],
        },
        {
          menuValue: 'Brands',
          icon2: 'triangles',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.brandList,
          subRoutes: [],
        },
        {
          menuValue: 'Units',
          icon2: 'brand-unity',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.units,
          subRoutes: [],
        },
        {
          menuValue: 'Variant Attributes',
          icon2: 'checklist ',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.varriantAttributes,
          subRoutes: [],
        },
      ],
    },
    {
      tittle: 'Stock',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Manage Stock',
          icon2: 'stack-3',
          route: routes.manageStocks,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Stock Adjustment',
          icon2: 'stairs-up',
          route: routes.stockAdjustment,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Stock Transfer',
          icon2: 'stack-pop',
          route: routes.stockTransfer,
          hasSubRoute: false,
          showSubRoute: false,
        },
      ],
    },

    {
      tittle: 'Sales',
      showAsTab: true,
      separateRoute: false,
      hasSubRoute: false,
      showSubRoute: true,
      menu: [
        {
          menuValue: 'Sales',
          icon2: 'layout-grid',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Online Orders',
              route: routes.salesList,
            },
            {
              menuValue: 'POS Orders',
              route: routes.posOrder,
            },
          ]
        },
        {
          menuValue: 'Invoices',
          icon2: 'file-invoice',
          route: routes.invoice,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Sales Return',
          icon2: 'receipt-refund',
          route: routes.salesReturn,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Quotation',
          icon2: 'files',
          route: routes.quotationList,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'POS',
          icon2: 'device-laptop',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'POS 1',
              route: routes.pos,
            },
          ]
        },
      ],
    },

    {
      tittle: 'Purchases',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Purchases',
          icon2: 'shopping-bag',
          route: routes.purchaseList,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Purchase Order',
          icon2: 'file-unknown',
          route: routes.purchaseOrderReport,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Purchase Return',
          icon2: 'file-upload',
          route: routes.purchaseReturns,
          hasSubRoute: false,
          showSubRoute: false,
        },
      ],
    },

    {
      tittle: 'Peoples',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Customers',
          icon2: 'users-group',
          route: routes.customers,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Billers',
          icon2: 'user-up',
          route: routes.billers,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Suppliers',
          icon2: 'user-dollar',
          route: routes.suppliers,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Stores',
          icon2: 'home-bolt',
          route: routes.storeList,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Warehouses',
          icon2: 'archive',
          route: routes.wareHouse,
          hasSubRoute: false,
          showSubRoute: false,
        },
      ],
    },
    {
      tittle: 'User Management',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Users',
          icon2: 'shield-up',
          route: routes.users,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Roles & Permissions',
          icon2: 'jump-rope',
          route: routes.rolesPermission,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Delete Account Request',
          icon2: 'trash-x',
          route: routes.deleteAccount,
          hasSubRoute: false,
          showSubRoute: false,
        },
      ],
    },
    {
      tittle: 'Settings',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'General Settings',
          icon2: 'settings',
          hasSubRoute: true,
          showSubRoute: false,
          page: 'general-settings',
          subMenus: [
            {
              menuValue: 'Profile',
              route: routes.generalSettings,
              hasSubRoute: false,
              showSubRoute: false,
              page: 'profile',
            },
            {
              menuValue: 'Security',
              route: routes.securitySettings,
              hasSubRoute: false,
              showSubRoute: false,
            },
            {
              menuValue: 'Notifications',
              route: routes.settingsNotification,
              hasSubRoute: false,
              showSubRoute: false,
            },
            {
              menuValue: 'Connected Apps',
              route: routes.connectedApps,
              hasSubRoute: false,
              showSubRoute: false,
            },
          ],
        },
        {
          menuValue: 'Logout',
          icon2: 'logout',
          route: routes.signIn,
          hasSubRoute: false,
          showSubRoute: false,
        },
      ],
    },
  ];

  public sidebarData2: SideBar[] = [
    {
      tittle: 'Main',
      icon: 'airplay',
      showAsTab: true,
      showMyTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.index,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'smart-home',
          base: 'dashboard',
          ids: 'dashboard',
          materialicons: 'home',
          subMenus: [
            {
              menuValue: 'Admin Dashboard',
              route: routes.index,
              base: 'index',
            },
            {
              menuValue: 'Admin Dashboard 2',
              route: routes.adminDashboard,
              base: 'admin-dashboard',
            },
            {
              menuValue: 'Sales Dashboard',
              route: routes.salesDashboard,
              base: 'sales-dashboard',
            },
          ],
        },

      ],
    },
    {
      tittle: 'Layout',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Layouts',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'layout-board-split',
          base: 'layouts',
          base2: 'layout-two-column',
          materialicons: 'home',
          ids: 'layouts',
          subMenus: [
            {
              menuValue: 'Horizontal',
              route: routes.Horizontal,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-horizontal',
            },
            {
              menuValue: 'Detached',
              route: routes.Detached,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
            {
              menuValue: 'Two Column',
              route: routes.TwoColumn,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-two-column',
            },
            {
              menuValue: 'Boxed',
              route: routes.Boxed,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
            {
              menuValue: 'RTL',
              route: routes.RTL,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
            {
              menuValue: 'Dark',
              route: routes.Dark,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
          ],
        },
      ],
    },
    {
      tittle: 'Inventory',
      icon: 'layers',
      showAsTab: false,
      separateRoute: false,
      base: 'projects',
      menu: [
        {
          menuValue: 'Inventory',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'table-plus',
          base: 'product-list',
          base2: 'add-product',
          materialicons: 'dashboard',
          ids: 'inventory',
          subMenus: [
            {
              menuValue: 'Products',
              route: routes.productList,
              base: 'product-list',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Low Stocks',
              route: routes.lowStock,
              base: 'low-stocks',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Category',
              route: routes.categoryList,
              page: 'category-list',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Sub Category',
              route: routes.subCategories,
              page: 'sub-categories',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Brands',
              route: routes.brandList,
              base: 'brand-list',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Units',
              route: routes.units,
              base: 'units',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Variant Attributes',
              route: routes.varriantAttributes,
              base: 'client',
              customSubmenuTwo: false,
            },
          ],
        },
      ],
    },
    {
      tittle: 'Stock',
      icon: 'layers',
      showAsTab: false,
      separateRoute: false,
      base: 'projects',

      menu: [
        {
          menuValue: 'Stock',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'stack-3',
          base: 'inventory',
          base2: 'projects',
          materialicons: 'dashboard',
          ids: 'stock',
          subMenus: [
            {
              menuValue: 'Manage Stock',
              route: routes.manageStocks,
              base: 'manage-stocks',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Stock Adjustment',
              route: routes.stockAdjustment,
              base: 'stock-adjustment',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Stock Transfer',
              route: routes.stockTransfer,
              base: 'stock-transfer',
              customSubmenuTwo: false,
            },
          ],
        },
      ],
    },
    {
      tittle: 'Sales',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Sales',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'device-laptop',
          materialicons: 'dashboard',
          ids: 'sales',
          subMenus: [
            {
              menuValue: 'Sales',
              hasSubRoute: true,
              customSubmenuTwo: true,
              showSubRoute: false,
              subMenusTwo: [
                {
                  menuValue: 'Online Orders',
                  route: routes.salesList,
                  base: 'online-order',
                },
                {
                  menuValue: 'POS Orders',
                  route: routes.posOrder,
                  base: 'pos-order',
                },
              ],
            },
            {
              menuValue: 'Invoices',
              route: routes.invoice,
              base: 'invoice',
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Sales Return',
              route: routes.salesReturn,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
              base: 'sales-return',
            },
          ],
        },
      ],
    },

    {
      tittle: 'Settings',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Settings',
          route: '',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'lock-check',
          base: 'base-ui',
          base2: 'advanced-ui',
          base3: 'charts',
          base4: 'icon',
          base5: 'forms',
          base7: 'table',
          materialicons: 'dashboard',
          ids: 'settings',
          subMenus: [
            {
              menuValue: 'General Settings',
              customSubmenuTwo: true,
              base: 'general-settings',
              subMenusTwo: [
                {
                  menuValue: 'Profile',
                  route: routes.generalSettings,
                  base: 'profile-settings',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Security',
                  route: routes.securitySettings,
                  base: 'security-settings',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Notifications',
                  route: routes.settingsNotification,
                  base: 'notification-settings',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Connected Apps',
                  route: routes.connectedApps,
                  base: 'connected-apps',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
              ],
            },
            {
              menuValue: 'Website Settings',
              customSubmenuTwo: true,
              base: 'website-settings',
              subMenusTwo: [
                {
                  menuValue: 'System Settings',
                  route: routes.systemSettings,
                  base: 'bussiness-settings',
                },
                {
                  menuValue: 'Company Settings',
                  route: routes.companySettings,
                  base: 'seo-settings',
                },
                {
                  menuValue: 'Localization',
                  route: routes.localizationSettings,
                  base: 'localization-settings',
                },
                {
                  menuValue: 'Prefixes',
                  route: routes.prefixes,
                  base: 'prefixes',
                },
                {
                  menuValue: 'Preferences',
                  route: routes.preference,
                  base: 'preferences',
                },
                {
                  menuValue: 'Appearance',
                  route: routes.appearance,
                  base: 'appearance',
                },
                {
                  menuValue: 'Language',
                  route: routes.languageSettings,
                  base: 'language',
                  base2: 'add-language',
                },
                {
                  menuValue: 'Social Authentication',
                  route: routes.socialAuthentication,
                  base: 'authentication-settings',
                },
              ],
            },
            {
              menuValue: 'Logout',
              customSubmenuTwo: false,
              base: 'logout',
              route: routes.signIn
            }
          ]
        }
      ]
    },
  ];
  public getSideBarData2: BehaviorSubject<SideBar[]> = new BehaviorSubject<
    SideBar[]
  >(this.sidebarData2);
  public resetData2(): void {
    this.sidebarData2.map((res: SideBar) => {
      res.showAsTab = false;
      res.menu.map((menus: SideBarMenu) => {
        menus.showSubRoute = false;
      });
    });
  }
  public sidebarData3 = [
    {
      tittle: 'Main Menu',
      hasSubRoute: true,
      icon: 'layout-grid',
      showSubRoute: false,
      subRoutes: [
        {
          tittle: 'Dashboard',
          hasSubRoute: true,
          showSubRoute: true,
          subRoutes: [
            {
              tittle: 'Admin Dashboard',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.index,
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Admin Dashboard 2',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.adminDashboard,
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Sales Dashboard',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.salesDashboard,
              customSubmenuTwo: false,
              subRoutes: [],
            },
          ],
        },
        {
          tittle: 'Super Admin',
          hasSubRoute: true,
          showSubRoute: true,
          subRoutes: [
            {
              tittle: 'Dashboard',
              hasSubRoute: false,
              showSubRoute: false,
              route: '/supeadmin',
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Companies',
              hasSubRoute: false,
              showSubRoute: false,
              route: '/admin2',
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Subcriptions',
              hasSubRoute: false,
              showSubRoute: false,
              route: '/supeadmin',
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Packages',
              hasSubRoute: false,
              showSubRoute: false,
              route: '/supeadmin',
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Domain',
              hasSubRoute: false,
              showSubRoute: false,
              route: '/supeadmin',
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Purchase Transcation',
              hasSubRoute: false,
              showSubRoute: false,
              route: '/supeadmin',
              customSubmenuTwo: false,
              subRoutes: [],
            },
          ],
        },
        {
          tittle: 'Application',
          hasSubRoute: true,
          showSubRoute: true,
          base: 'application',
          subRoutes: [
            {
              tittle: 'Chat',
              route: routes.chat,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Call',
              hasSubRoute: true,
              showSubRoute: false,
              base: 'application',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  tittle: 'Video Call',
                  route: routes.videoCall,
                  hasSubRoute: false,
                  showSubRoute: false,
                  subRoutes: [],
                },
                {
                  tittle: 'Audio Call',
                  route: routes.audioCall,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  tittle: 'Call History',
                  route: routes.callHistory,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
              ],
            },
            {
              tittle: 'Calendar',
              route: routes.calendar,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Email',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.email,
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'To Do',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.toDo,
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Notes',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.notes,
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'File Manager',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.fileManager,
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Products',
              hasSubRoute: false,
              showSubRoute: false,
              route: '/appli',
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Ecommerce',
              hasSubRoute: true,
              showSubRoute: true,
              base: 'ecommerce',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  tittle: 'Products',
                  route: '/ecommerce',
                  hasSubRoute: false,
                  showSubRoute: false,
                  subRoutes: [],
                },
                {
                  tittle: 'Orders',
                  route: '/orde',
                  hasSubRoute: false,
                  showSubRoute: false,
                },

                {
                  tittle: 'Customers',
                  route: '/ecommer',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  tittle: 'Cart',
                  route: '/ecommer',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  tittle: 'Checkout',
                  route: '/ecommer',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  tittle: 'Wishlist',
                  route: '/ecommer',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  tittle: 'Reviews',
                  route: '/ecommer',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
              ],
            },
            {
              tittle: 'Social Feeds',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.socialFeed,
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Search List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.kanban,
              customSubmenuTwo: false,
              subRoutes: [],
            },
          ],
        },
        {
          tittle: 'Layouts',
          hasSubRoute: true,
          showSubRoute: true,
          activeRoute: 'layot',
          base: 'layouts',
          subRoutes: [
            {
              tittle: 'Horizontal',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.Horizontal,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Detached',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.Detached,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Two Column',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.TwoColumn,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Boxed',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.Boxed,
              customSubmenuTwo: false,
            },
            {
              tittle: 'RTL',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.RTL,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Dark',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.Dark,
              customSubmenuTwo: false,
            },
          ],
        },
      ],
    },
    {
      tittle: 'Inventory',
      hasSubRoute: true,
      icon: 'brand-unity',
      showSubRoute: false,
      activeRoute: 'product',
      subRoutes: [
        {
          tittle: 'Products',
          hasSubRoute: false,
          showSubRoute: true,
          route: routes.productList,
          subRoutes: [],
        },
        {
          tittle: 'Low Stocks',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.lowStock,
          subRoutes: [],
        },
        {
          tittle: 'Category',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.categoryList,
          subRoutes: [],
        },
        {
          tittle: 'Sub Category',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.subCategories,
          subRoutes: [],
        },
        {
          tittle: 'Brands',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.brandList,
          subRoutes: [],
        },
        {
          tittle: 'Units',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.units,
          subRoutes: [],
        },
        {
          tittle: 'Variant Attributes',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.varriantAttributes,
          subRoutes: [],
        },
      ],
    },
    {
      tittle: 'Sales & Purchase',
      hasSubRoute: true,
      icon: 'layout-grid',
      showSubRoute: false,
      subRoutes: [
        {
          tittle: 'Stock',
          hasSubRoute: true,
          showSubRoute: true,
          subRoutes: [
            {
              tittle: 'Manage Stock',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.manageStocks,
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Stock Adjustment',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.stockAdjustment,
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Stock Transfer',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.stockTransfer,
              customSubmenuTwo: false,
              subRoutes: [],
            },
          ],
        },
        {
          tittle: 'Sales',
          hasSubRoute: true,
          showSubRoute: false,
          route: routes.salesList,
          subRoutes: [
            {
              tittle: 'Sales',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.salesList,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  tittle: 'Online Order',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.salesList,
                  customSubmenuTwo: false,
                  subRoutes: [],
                },
                {
                  tittle: 'POS Order',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.posOrder,
                  customSubmenuTwo: false,
                  subRoutes: [],
                }
              ],
            },
            {
              tittle: 'Invoice',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.invoice,
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Sales Return',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.salesReturn,
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'Quotation',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.quotationList,
              customSubmenuTwo: false,
              subRoutes: [],
            },
            {
              tittle: 'POS',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.pos,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  tittle: 'POS 1',
                  hasSubRoute: false,
                  showSubRoute: false,
                  route: routes.pos,
                  customSubmenuTwo: false,
                  subRoutes: [],
                },

              ],
            },
          ],
        },
        {
          tittle: 'Purchases',
          hasSubRoute: true,
          icon: 'assets/img/icons/purchase1.svg',
          showSubRoute: false,
          activeRoute: 'users',
          subRoutes: [
            {
              tittle: 'Purchases',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.purchaseList,
              subRoutes: [],
              customSubmenuTwo: false,
            },
            {
              tittle: 'Purchase Order',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.purchaseOrderReport,
              subRoutes: [],
              customSubmenuTwo: false,
            },
            {
              tittle: 'Purchase Return',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.purchaseReturns,
              subRoutes: [],
              customSubmenuTwo: false,
            },

          ],
        },
        {
          tittle: 'Expenses',
          hasSubRoute: true,
          showSubRoute: true,
          route: routes.stockTransfer,
          subRoutes: [
            {
              tittle: 'Expenses',
              route: routes.expenseList,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Expense Category',
              route: routes.expenseCategory,
              customSubmenuTwo: false,
            },
          ],
        },
        {
          tittle: 'Income',
          hasSubRoute: true,
          showSubRoute: false,
          subRoutes: [
            {
              tittle: 'Income',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.income,
              subRoutes: [],
              customSubmenuTwo: false,
            },
            {
              tittle: 'Income Category',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.incomeCategory,
              subRoutes: [],
              customSubmenuTwo: false,
            }
          ],
        },
        {
          tittle: 'Bank Accounts',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.accountList,
          subRoutes: []
        },
        {
          tittle: 'Money Transfer',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.moneyTransfer,
          subRoutes: []
        },
        {
          tittle: 'Balance Sheet',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.balanceSheet,
          subRoutes: []
        },
        {
          tittle: 'Trial Balance',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.trailBalance,
          subRoutes: []
        },
        {
          tittle: 'Cash Flow',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.cashFlow,
          subRoutes: []
        },
        {
          tittle: 'Account Statement',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.accountStatement,
          subRoutes: []
        },
      ],
    },


    {
      tittle: 'Settings',
      hasSubRoute: true,
      icon: 'settings',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [
        {
          tittle: 'General Settings',
          hasSubRoute: true,
          showSubRoute: false,
          route: routes.users,
          subRoutes: [
            {
              tittle: 'Profile',
              route: routes.generalSettings,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Security',
              route: routes.securitySettings,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Notifications',
              route: routes.settingsNotification,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Connected Apps',
              route: routes.connectedApps,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
          ],
        },
        {
          tittle: 'Website Settings',
          hasSubRoute: true,
          showSubRoute: false,
          subRoutes: [
            {
              tittle: 'System Settings',
              route: routes.systemSettings,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Company Settings',
              route: routes.companySettings,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Localization',
              route: routes.localizationSettings,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Prefixes',
              route: routes.prefixes,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Preference',
              route: routes.preference,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Appearance',
              route: routes.appearance,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Social Authentication',
              route: routes.socialAuthentication,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              tittle: 'Language',
              route: routes.languageSettings,
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
          ],
        },

      ],
    },
    {
      tittle: 'More',
      hasSubRoute: true,
      icon: 'circle-plus',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [
        {
          tittle: 'People',
          hasSubRoute: true,
          showSubRoute: false,
          subRoutes: [
            {
              tittle: 'Customers',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.customers,
              subRoutes: [],
              customSubmenuTwo: false,
            },
            {
              tittle: 'Billers',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.billers,
              subRoutes: [],
              customSubmenuTwo: false,
            },
            {
              tittle: 'Suppliers',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.suppliers,
              subRoutes: [],
              customSubmenuTwo: false,
            },
            {
              tittle: 'Stores',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.storeList,
              subRoutes: [],
              customSubmenuTwo: false,
            },
            {
              tittle: 'Warehouses',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.wareHouse,
              subRoutes: [],
              customSubmenuTwo: false,
            },
          ],
        },
        {
          tittle: 'Roles & Permissions',
          hasSubRoute: true,
          showSubRoute: false,
          route: routes.users,
          subRoutes: [
            {
              tittle: 'Users',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.users,
              subRoutes: [],
              customSubmenuTwo: false,
            },
            {
              tittle: 'Roles & Permissions',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.rolesPermission,
              subRoutes: [],
              customSubmenuTwo: false,
            },
            {
              tittle: 'Delete Account Request',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.deleteAccount,
              subRoutes: [],
              customSubmenuTwo: false,
            },
          ],
        },
      ],
    },
  ];

  public settings_sidebar = [
    {
      icon: 'ti ti-settings',
      title: 'General Settings',
      page: 'general-settings',
      expanded: false,
      subMenu: [
        { title: 'Profile', routes: routes.generalSettings, last: 'profile' },
        { title: 'Security', routes: routes.securitySettings },
        { title: 'Notifications', routes: routes.settingsNotification },
        { title: 'Connected Apps', routes: routes.connectedApps },
      ],
    },
    {
      icon: 'ti ti-world',
      title: 'Website Settings',
      page: 'website-settings',
      expanded: false,
      subMenu: [
        { title: 'System Settings', routes: routes.systemSettings },
        { title: 'Company Settings', routes: routes.companySettings },
        { title: 'Localization', routes: routes.localizationSettings },
        { title: 'Prefixes', routes: routes.prefixes },
        { title: 'Preference', routes: routes.preference },
        { title: 'Appearance', routes: routes.appearance },
        {
          title: 'Social Authentication',
          routes: routes.socialAuthentication,
        },
        { title: 'Language', routes: routes.languageSettings },
      ],
    },
    {
      icon: 'ti ti-device-mobile',
      title: 'App Settings',
      page: 'app-settings',
      expanded: false,
      subMenu: [
        { title: 'Invoice', routes: routes.invoiceSettings },
        { title: 'Invoice Templates', routes: routes.invoiceTemplate },
        { title: 'Printer', routes: routes.printerSettings },
        { title: 'POS', routes: routes.posSettings },
        { title: 'Signatures', routes: routes.signatures },
        { title: 'Custom Fields', routes: routes.customFields },
      ],
    },
    {
      icon: 'ti ti-device-desktop',
      title: 'System Settings',
      page: 'system-settings',
      expanded: false,
      subMenu: [
        { title: 'Email', routes: routes.emailSettings },
        { title: 'Email Templates', routes: routes.emailTemplates },
        { title: 'SMS Gateways', routes: routes.smsGateway },
        { title: 'SMS Templates', routes: routes.smsTemplates },
        { title: 'OTP', routes: routes.otpSettings },
        { title: 'GDPR Cookies', routes: routes.gdprSettings },
      ],
    },
    {
      icon: 'ti ti-settings-dollar',
      title: 'Financial Settings',
      page: 'financial-settings',
      expanded: false,
      subMenu: [
        { title: 'Payment Gateway', routes: routes.paymentGatewaySettings },
        { title: 'Bank Accounts', routes: routes.bankSettingsGrid },
        { title: 'Tax Rates', routes: routes.taxRates },
        { title: 'Currencies', routes: routes.currencySettings },
      ],
    },
    {
      icon: 'ti ti-settings-2',
      title: 'Other Settings',
      page: 'other-settings',
      expanded: false,
      subMenu: [
        { title: 'Storage', routes: routes.storageSettings },
        { title: 'Ban IP Address', routes: routes.banIpAddress },
      ],
    },
  ];
  public videocall = [
    {
      img: 'assets/img/users/user-01.jpg',
      name: 'Barbara',
    },
    {
      img: 'assets/img/users/user-02.jpg',
      name: 'Linnea',
    },
    {
      img: 'assets/img/users/user-05.jpg',
      name: 'Richard',
    },
    {
      img: 'assets/img/users/user-03.jpg',
      name: 'Freda',
    },
  ];
}
