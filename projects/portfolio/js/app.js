const projects = [
  { name: 'Project 1', description: 'Description for project 1', link: '#' },
  { name: 'Project 2', description: 'Description for project 2', link: '#' },
];

function Portfolio() {
  return React.createElement(
    'div',
    { className: 'portfolio-container' },
    [
      React.createElement('h1', { key: 'title' }, 'My Portfolio'),
      React.createElement(
        'ul',
        { key: 'list', className: 'project-list' },
        projects.map((project, idx) =>
          React.createElement(
            'li',
            { key: idx, className: 'project-item' },
            React.createElement('h2', null, project.name),
            React.createElement('p', null, project.description),
            React.createElement(
              'a',
              { href: project.link },
              'View project'
            )
          )
        )
      ),
    ]
  );
}

ReactDOM.render(React.createElement(Portfolio), document.getElementById('root'));
