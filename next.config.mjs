import nextra from 'nextra'
 
const withNextra = nextra({
  defaultShowCopyCode: true,
  search: { codeblocks: false }
})
 
// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})