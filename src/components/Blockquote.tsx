import React from "react";

type BlockquoteProps = {
	quote: string;
	author: string;
};

export const Blockquote = ({ quote, author }: BlockquoteProps) => {
	return (
		<blockquote className="blockquote text-end mx-3">
			<p className="mb-1">{quote}</p>
			<footer className="blockquote-footer text-end mx-3">{author}</footer>
		</blockquote>
	);
};
