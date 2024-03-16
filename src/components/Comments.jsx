import React, { useState } from 'react';

const Comments = ({ comments }) => {
    const [expand, setExpand] = useState(false)
    return (
        <div style={{ margin: '5px' }}>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <div style={{ border: '1px solid gray', margin: '10px' }} >
                        💬 <span style={{ padding: '10px' }}>{comment.text}</span>
                    </div>
                    <span onClick={() => setExpand(!expand)}>Show More</span>
                    { expand && comment.replies.length > 0 && <Comments comments={comment.replies} />}
                </div>
            ))}
        </div>
    );
};

export default Comments;
