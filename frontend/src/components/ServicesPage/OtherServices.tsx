"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import { blogData } from '@/data/blogData';

export default function OtherServices({ currentId }: { currentId: string }) {
    // Find the current service in the data
    const currentService = servicesData.find(s => s.id === currentId);
    
    // Get the related blog IDs from the service data
    const relatedBlogIds = (currentService as any)?.relatedBlogIds || [];
    
    // Filter blogs based on the IDs provided for this service
    const relatedBlogs = blogData.filter(blog => 
        relatedBlogIds.includes(blog.id)
    );

    // If no specific blogs are mapped, fallback to first 2 blogs
    const displayedBlogs = relatedBlogs.length > 0 
        ? relatedBlogs.slice(0, 2) 
        : blogData.slice(0, 2);

    return (
        <section className="w-full pb-32 bg-[#EADDD7] px-6 lg:px-28">
            <div className="max-w-7xl mx-auto">
                <div className="relative flex flex-col md:flex-row justify-center items-center mb-10 gap-8 border-t border-[#3b2a28]/10 pt-20">
                    <div className="flex flex-col items-center text-center">
                        <h4 className="text-[#3b2a28] text-4xl md:text-5xl font-serif mb-4">Related Insights</h4>
                        <div className="w-40 h-[2px] bg-[#3b2a28] mb-6 rounded-full"></div>
                        <p className="text-[#3b2a28]/60 font-[Lato] text-xl max-w-2xl">
                            Discover professional tips and insights related to your treatment journey.
                        </p>
                    </div>
                    <Link href="/blog" className="md:absolute md:right-0 md:bottom-2 text-[#0097ab] font-bold text-sm tracking-widest uppercase border-b-2 border-[#0097ab] pb-2 hover:text-[#3b2a28] hover:border-[#3b2a28] transition-all duration-300">
                        VIEW BLOG
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
                        {displayedBlogs.map((blog, i) => (
                            <Link 
                                key={i} 
                                href={`/blog/${blog.id}`}
                                className="group/card bg-white rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4 flex flex-col h-max"
                            >
                                <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden relative">
                                    <img 
                                        src={blog.image} 
                                        alt={blog.title} 
                                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover/card:scale-110" 
                                    />
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                                        <span className="text-[#0097ab] font-bold text-[10px] uppercase tracking-widest">{blog.category}</span>
                                    </div>
                                </div>
                                
                                <div className="p-8 md:p-10 flex flex-col">
                                    <div className="flex items-center gap-4 text-[#3b2a28]/40 font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
                                        <span className="flex items-center gap-2">
                                            <Calendar size={12} className="text-[#0097ab]" /> {blog.date}
                                        </span>
                                    </div>

                                    <h5 className="text-[#3b2a28] text-2xl font-serif font-bold mb-4 group-hover/card:text-[#0097ab] transition-colors line-clamp-2 leading-tight">
                                        {blog.title}
                                    </h5>
                                    
                                    <p className="text-[#3b2a28]/60 font-[Lato] text-base line-clamp-2 mb-8 leading-relaxed">
                                        {blog.excerpt}
                                    </p>
                                    
                                    <div className="border-t border-[#3b2a28]/5 pt-6 flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-[#0097ab] font-bold text-[11px] tracking-[0.2em] group-hover/card:gap-5 transition-all duration-500 uppercase">
                                            READ FULL ARTICLE <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
    );
}

