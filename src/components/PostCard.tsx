import React from 'react';
import { LinkedInPost } from '../types';
import { LinkedInIcon, WhatsAppIcon } from './Icons';

interface PostCardProps {
  post: LinkedInPost;
  proposalNumber: number;
}

const PostCard: React.FC<PostCardProps> = ({ post, proposalNumber }) => {
  const fullPostText = `${post.content}\n\n${post.hashtags.join(' ')}`;

  const handleShareToLinkedIn = () => {
    const encodedText = encodeURIComponent(fullPostText);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=&summary=${encodedText}`, '_blank');
  };

  const handleShareToWhatsApp = () => {
    const whatsAppText = `*Proposal ${proposalNumber}: ${post.title}*\n\n${fullPostText}`;
    const encodedText = encodeURIComponent(whatsAppText);
    window.open(`https://api.whatsapp.com/send?text=${encodedText}`, '_blank');
  };

  return (
    <div className="bg-dark-card rounded-lg shadow-lg overflow-hidden flex flex-col h-full border border-dark-border transform transition-transform duration-300 hover:scale-105 hover:border-brand-blue">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-brand-blue mb-2">
          Proposal {proposalNumber}: {post.title}
        </h3>
        <p className="text-light-text whitespace-pre-wrap text-sm leading-relaxed mb-4">
          {post.content}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.hashtags.map((tag, index) => (
            <span key={index} className="text-xs bg-dark-border text-medium-text px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-slate-800/50 p-4 flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleShareToLinkedIn}
          className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-dark-card transition-colors"
        >
          <LinkedInIcon className="w-5 h-5 mr-2" />
          Publish on LinkedIn
        </button>
        <button
          onClick={handleShareToWhatsApp}
          className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-whatsapp hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-dark-card transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5 mr-2" />
          Review on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default PostCard;
