import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { BeerApi } from "../beerapi";

type AlertDialogProps = {
  beer: BeerApi;
  open: boolean;
  thanks: () => void;
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
            <p>{beer.description}</p>
            <p>{beer.tagline}</p>
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
