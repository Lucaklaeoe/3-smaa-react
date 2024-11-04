import React, { useRef, useState, useEffect } from 'react';

const CanvasDrawing = () => {
  const canvasRef = useRef(null); // Reference to the canvas
  const contextRef = useRef(null); // Reference to the canvas context
  const [isDrawing, setIsDrawing] = useState(false); // Flag to track drawing status

  // Initialize canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.8; // Set canvas width
    canvas.height = window.innerHeight * 0.6; // Set canvas height
    canvas.style.border = '1px solid black'; // Optional styling

    // Set up the context
    const context = canvas.getContext('2d');
    context.lineCap = 'round'; // Smooth line endings
    context.strokeStyle = 'black'; // Line color
    context.lineWidth = 5; // Line thickness
    contextRef.current = context;
  }, []);

  // Start drawing
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  // Draw on the canvas
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  // Stop drawing
  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  // Save the canvas as an image
  const saveDrawing = () => {
    const canvas = canvasRef.current;
    const imageURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'drawing.png';
    link.click();
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <button onClick={saveDrawing}>Save Drawing</button>
    </div>
  );
};

export default CanvasDrawing;
