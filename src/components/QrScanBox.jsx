import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QrScanner from "qr-scanner";
import SideBar from "./SideBar";
import "./HomeStyle.css";
const QrScanBox = () => {
  let navigate = useNavigate();
  const [qrId, setqrId] = useState(0);
  const [camera, setCamera] = useState(false);

  useEffect(async () => {
    try {
      const hasCamera = await QrScanner.hasCamera();
      setCamera(hasCamera);
      if (hasCamera) {
        const qrScanBox = document.getElementById("qrScanBox");
        const qrScanner = new QrScanner(
          qrScanBox,
          (result) => {
            renderQrResult(result, qrScanner);
          },
          { highlightScanRegion: true }
        );
        qrScanner.start();
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const renderQrResult = (result, qrScanner) => {
    setqrId(result?.data);
    if (result.data) {
      qrScanner.stop();
      navigate("/", {
        state: {
          qrId: result.data,
        },
      });
    }
  };

  return (
    <>
      <SideBar camera={true} qrId={qrId} />
      <div className="preview-container">
        {camera ? (
          <video className="qrScanBox" id="qrScanBox"></video>
        ) : (
          <p style={{ color: "#fff" }}>No camera</p>
        )}
      </div>
    </>
  );
};

export default QrScanBox;
