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

const PdfModal = ({title,link,image,mobileImage}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <>
            <Button className='p-0 border-0 bg-transparent'  onClick={handleShow}>

                        {/* <Image
                        className="img-fluid w-100"
                        width={1022}
                        height={570}
                        src={image}
                        alt="collection banner"
                      /> */}

                    <div className='position-relative'>
                    <picture>
                        <source srcSet={mobileImage} media='(max-width:600px)' />
                        <img className="img-fluid w-100"
                        width={1022}
                        height={570}
                        src={image}
                        alt="collection banner" />
                      </picture>

                      <div className=" position-absolute end-0 bottom-0 p-2 small">
                        <div className='bg-white text-dark p-1 rounded-3 fw-semibold px-2'>
                        Click To View
                        </div>
                      </div>
                    </div>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height:'85vh'}}>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3/build/pdf.worker.min.js`}>
                        <Viewer
                            fileUrl={link}
                            plugins={[defaultLayoutPluginInstance]}
                        />
                    </Worker>
                </Modal.Body>
                
            </Modal>
        </>
    );
}

export default PdfModal