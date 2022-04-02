import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type AlertDialogProps = {
  beer: MinimalBeerInformation;
  open: boolean;
  thanks: () => void;
};

type MinimalBeerInformation = {
  first_brewed: string;
  tagline: string;
  description: string;
  brewers_tips: string;
};

export default function AlertDialog({ beer, open, thanks }: AlertDialogProps) {
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>First Brewed: {beer.first_brewed}</p>
            <p>Tagline: {beer.tagline}</p>
            <p>Description: {beer.description}</p>
            <p>Tips: {beer.brewers_tips}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={thanks} autoFocus>
            Thanks!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
