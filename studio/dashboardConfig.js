export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fce9e2c89808a1ccffb86f4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-12-7-20-2-studio',
                  apiId: 'a03708fc-0dfe-4970-9003-a8c1cc96ee26'
                },
                {
                  buildHookId: '5fce9e2c89808a1b58fb8513',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-12-7-20-2',
                  apiId: '685cd927-eb83-4aea-9a56-e8fa8694ed14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/sanity-kitchen-sink-12-7-20-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-12-7-20-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
