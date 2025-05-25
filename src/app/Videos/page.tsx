'use client';
import React, { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';

const videos = [
	{
		id: '3',
		title: 'Vidala de los Ancestros',
		youtubeId: 'E-6xHGXdFbs',
		thumbnail: 'https://img.youtube.com/vi/E-6xHGXdFbs/hqdefault.jpg',
	},
	{
		id: '4',
		title: 'Ritual',
		youtubeId: 'S1HaNmYf2mA',
		thumbnail: 'https://img.youtube.com/vi/S1HaNmYf2mA/hqdefault.jpg',
	},
	{
		id: '5',
		title: 'Chacarera del Temporal',
		youtubeId: 'RS2sUxKJqBs',
		thumbnail: 'https://img.youtube.com/vi/RS2sUxKJqBs/hqdefault.jpg',
	},
	// Agrega más videos aquí
];

type VideoType = typeof videos[0];

function Videos() {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedVideo, setSelectedVideo] = useState<VideoType | null>(null);

	const openModal = (video: VideoType) => {
		setSelectedVideo(video);
		setModalOpen(true);
	};
	const closeModal = () => {
		setModalOpen(false);
		setSelectedVideo(null);
	};

	return (
		<div className="py-10">
			<h1 className="text-3xl font-bold text-center mb-10">
				Galería de Videos
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
				{videos.map((video) => (
					<div
						key={video.id}
						className="cursor-pointer rounded overflow-hidden shadow-lg hover:shadow-2xl transition"
						onClick={() => openModal(video)}
					>
						<img
							src={video.thumbnail}
							alt={video.title}
							className="w-full h-48 object-cover"
						/>
						<div className="p-2 bg-black text-white text-center text-lg">
							{video.title}
						</div>
					</div>
				))}
			</div>
			{modalOpen && selectedVideo && (
				<div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
					<div className="relative bg-black/80 rounded-lg p-4 shadow-lg shadow-slate-700 w-[90vw] max-w-5xl flex flex-col items-center">
						<button
							className="absolute top-2 right-2 text-white text-4xl z-10"
							onClick={closeModal}
							aria-label="Cerrar"
						>
							×
						</button>
						<div className="w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded"
              ></iframe>
            </div>
						<a
							href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-4 flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded shadow transition-colors text-lg"
						>
							<FaYoutube className="text-2xl" />
							Ver en YouTube
						</a>
					</div>
				</div>
			)}
			<div className="flex justify-center mt-8">
				<a
					href="https://www.youtube.com/channel/UCBTWomtCTZrxqE2rzMXTTig"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded shadow text-xl transition-colors"
				>
					<FaYoutube className="text-3xl" />
					Mi canal de YouTube
				</a>
			</div>
		</div>
	);
}

export default Videos;
