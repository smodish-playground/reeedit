const data = {
  posts: [
    {
      id: 'theFirstPost',
      title: "This isn't really even a post",
      topics: ['posting', 'faking it', 'other stuff'],
      content: 'We really should talk about posting',
      createdBy: 'firsty',
      createdAt: 1690023145,
    },
    {
      id: 'theSecondPost',
      title: "This isn't really even a post either",
      topics: ['faking it', 'other stuff', 'copying'],
      content: 'We really should talk about posting and commenting',
      createdBy: 'secondly',
      createdAt: 1691023145,
    },
  ],
  topics: ['copying', 'faking it', 'other stuff', 'posting'],
  users: [
    {
      displayName: 'first poster',
      uuid: 'firsty',
      avatarURL: 'https://placekitten.com/202/202',
    },
    {
      displayName: 'another poster',
      uuid: 'secondly',
      avatarURL: 'https://placekitten.com/222/222',
    },
  ],
}

export default data
