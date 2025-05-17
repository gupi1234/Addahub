import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/Slice/postsSlice";
import { Link } from "react-router-dom";
import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import {
  Modal,
  Box,
  Button,
  Typography,
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const Share = () => {
  const [user, setUser] = useState({
    text: "",
    file: null,
    location: "",
    feeling: "",
  });
  const [feelingDialogOpen, setFeelingDialogOpen] = useState(false);

  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [locationDialogOpen, setLocationDialogOpen] = useState(false);
  const [locationInput, setLocationInput] = useState("");

  const handleInputChange = (e) => {
    setUser((prev) => ({
      ...prev,
      text: e.target.value,
    }));
  };

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser((prev) => ({
        ...prev,
        file: URL.createObjectURL(file),
      }));
      setOpen(true);
    }
  };

  const handleLocationClick = () => {
    setLocationDialogOpen(true);
  };

  const handleLocationSave = () => {
    setUser((prev) => ({
      ...prev,
      location: locationInput,
    }));
    setLocationDialogOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.text.trim()) {
      alert("Write something before posting!");
      return;
    }
    const postData = {
      desc: user.text,
      photo: user.file,
      date: "Just now",
      userId: 1,
      location: user.location || null,
      feeling: user.feeling || null,
      like: 0,
      comment: 0,
    };
    dispatch(createPost(postData));
    setUser({ text: "", file: null, location: "" });
    setOpen(false);
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to="/profile">
            <img
              src="/src/assets/person/profile.jpg"
              alt=""
              className="shareProfilePicture"
            />
          </Link>
          <input
            type="text"
            placeholder="What's on your mind, Gupi?"
            className="shareInput"
            name="text"
            value={user.text}
            onChange={handleInputChange}
          />
        </div>
        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption" onClick={handlePhotoClick}>
              <PermMediaIcon htmlColor="#e74c3c" className="shareIcon" />
              <span className="shareOptionText">Photo or video</span>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
            <div className="shareOption">
              <LocalOfferIcon htmlColor="#27ae60" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption" onClick={handleLocationClick}>
              <LocationOnIcon htmlColor="#2980b9" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div
              className="shareOption"
              onClick={() => setFeelingDialogOpen(true)}
            >
              <AddReactionIcon htmlColor="#f1c40f" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>

          <button className="shareButton" onClick={() => setOpen(true)}>
            <span>Share</span>
            <ShareIcon style={{ height: "16px" }} />
          </button>
        </div>
      </div>

      {/* Modal for Post Preview */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            width: 500,
            margin: "auto",
            marginTop: "5%",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            outline: "none",
            position: "relative",
            textAlign: "center",
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            marginBottom={2}
          >
            Create Post
          </Typography>

          {user.text.trim() && (
            <Typography variant="body1" marginBottom={2}>
              {user.text}
            </Typography>
          )}

          <TextField
            fullWidth
            multiline
            rows={1}
            placeholder="What's on your mind?"
            value={user.text}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, text: e.target.value }))
            }
            sx={{ marginBottom: 2 }}
          />

          {user.file && (
            <img
              src={user.file}
              alt="preview"
              style={{
                width: "100%",
                height: "300px",
                marginBottom: "20px",
                borderRadius: "8px",
              }}
            />
          )}

          {user.location && (
            <Typography variant="body2" color="textSecondary" marginBottom={2}>
              📍 {user.location}
            </Typography>
          )}
          {user.feeling && (
            <Typography variant="body2" color="textSecondary" marginBottom={2}>
              {user.feeling === "Happy" && "😄"}
              {user.feeling === "Sad" && "😢"}
              {user.feeling === "Angry" && "😡"}
              {user.feeling === "Love" && "😍"}
              {user.feeling === "Surprised" && "😱"}
              Feeling {user.feeling}
            </Typography>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Share Post
          </Button>
        </Box>
      </Modal>

      <Dialog
        open={locationDialogOpen}
        onClose={() => setLocationDialogOpen(false)}
      >
        <DialogTitle>Enter your location</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLocationDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleLocationSave}>Save</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={feelingDialogOpen}
        onClose={() => setFeelingDialogOpen(false)}
      >
        <DialogTitle>How are you feeling?</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            paddingTop: 2,
          }}
        >
          {[
            { icon: "😄", label: "Happy" },
            { icon: "😢", label: "Sad" },
            { icon: "😡", label: "Angry" },
            { icon: "😍", label: "Love" },
            { icon: "😱", label: "Surprised" },
          ].map((feeling) => (
            <Button
              key={feeling.label}
              variant="outlined"
              onClick={() => {
                setUser((prev) => ({ ...prev, feeling: feeling.label }));
                setFeelingDialogOpen(false);
              }}
              sx={{ display: "flex", justifyContent: "flex-start", gap: 1 }}
            >
              <span style={{ fontSize: "24px" }}>{feeling.icon}</span>{" "}
              {feeling.label}
            </Button>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Share;
