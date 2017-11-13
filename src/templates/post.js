import React from 'react';
import Helment from 'react-helmet';

function Template(props) {
    const {markdownRemark: post} = props.data;

    return (
        <div>
            <h2>{post.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
    );
}

export default Template;

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`
