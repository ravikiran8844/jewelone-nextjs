"use client"
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import Image from 'next/image';

const PdfModal = ({title,link,image}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <>
            <Button className='p-0 border-0 bg-transparent'  onClick={handleShow}>

                        <Image
                        className="img-fluid w-100"
                        width={1022}
                        height={570}
                        src={image}
                        alt="collection banner"
                      />
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: '500px' }}>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                        <Viewer
                            fileUrl={link}
                            plugins={[defaultLayoutPluginInstance]}
                        />
                    </Worker>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PdfModal