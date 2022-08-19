const data = {
  posts: [
    {
      id: 'jXI_oh1UDHM7If-zDvytk',
      title: "This isn't really even a post",
      topics: ['posting', 'fake post', 'other stuff'],
      content: 'We really should talk about posting',
      createdBy: 'firsty',
      createdAt: 1659975419664,
      votes: { up: 35, down: 18 },
    },
    {
      id: 'QPichBrG9QGBu3RAc7ipx',
      title: "This isn't really even a post either",
      topics: ['fake post', 'other stuff', 'copying'],
      content: 'We really should talk about posting and commenting',
      createdBy: 'secondly',
      createdAt: 1659975619664,
      votes: { up: 5, down: 28 },
    },
  ],
  topics: ['copying', 'other stuff', 'posting'],
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
