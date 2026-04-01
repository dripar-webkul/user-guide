// .vitepress/version-configs/2.0.ts
let version = '2.0'

/* version prefix setter */
function setVersionPrefix(children: [string, string][]) {
  return children.map(child => ({
    text: child[1],
    link: `/${version}/${child[0]}`
  }))
}

export default [
  {
    text: 'Introduction',
    link: `/${version}/introduction/introductions`
  },

  {
    text: 'Key Features by Version',
    link: `/${version}/releases/`
  },

  {
    text: 'Dashboard',
    link: `/${version}/dashboard/`
  },

  {
    text: 'Product Types',
    link: `/${version}/products/`,
    collapsed: false,
    items: setVersionPrefix([
      ['products/simple', 'Simple Product'],
      ['products/configurable', 'Configurable Product'],
    ])
  },

  {
    text: 'Categories',
    link: `/${version}/category/categories`
  },

  {
    text: 'Category Fields',
    link: `/${version}/categoryField/category-fields`
  },

  {
    text: 'Attributes',
    link: `/${version}/attribute/`,
    collapsed: false,
    items: setVersionPrefix([
      ['attribute/attribute-input', 'Attribute Input Type'],
      ['attribute/product-attribute', 'Create Product Attribute'],
      ['attribute/attribute-family', 'Attribute Family'],
      ['attribute/attribute-groups', 'Attribute Groups'],
    ])
  },

  {
    text: 'Data Transfer',
    link: `/${version}/data-transfer/`,
    collapsed: false,
    items: setVersionPrefix([
      ['data-transfer/import', 'Import'],
      ['data-transfer/export', 'Export'],
    ])
  },

  {
    text: 'Settings',
    link: `/${version}/settings/`,
    collapsed: false,
    items: setVersionPrefix([
      ['settings/locale', 'Locales'],
      ['settings/currencies', 'Currencies'],
      ['settings/channels', 'Channels'],
      ['settings/users', 'Users'],
      ['settings/roles', 'Roles'],
    ])
  },

  {
    text: 'Notifications',
    link: `/${version}/notifications/`
  },

  {
    text: 'Configurations',
    link: `/${version}/configuration/`,
    collapsed: false,
    items: setVersionPrefix([
      ['configuration/integration', 'Integration'],
      ['settings/webhooks', 'Webhooks'],
    ])
  },

  {
    text: 'Magic AI',
    link: `/${version}/magic/magic-ai`,
    collapsed: false,
    items: setVersionPrefix([
      ['configuration/magic-ai', 'Platforms, Prompts & Settings'],
    ])
  },

  {
    text: 'AI Agent',
    link: `/${version}/ai-agent/`,
    collapsed: false,
    items: setVersionPrefix([
      ['ai-agent/ai-agent-chat', 'AI Agent Chat'],
    ])
  }
]
