AFRAME.registerComponent('control-camera', {
    moveUp: false,
    moveDown: false,
    tick: function() {
        //console.log(this.el.object3D.position);
        if (this.moveUp) {
            this.el.object3D.position.y += .1;
        }
        if (this.moveDown) {
            this.el.object3D.position.y -= .1;
        }
    },
    init: function() {
        document.addEventListener('keypress', (e) => {
            if (e.key == 'q' || e.key == 'Q' && this.moveUp == false) {
                this.moveDown = true;
            }

            if (e.key == 'e' || e.key == 'E' && this.moveDown == false) {
                this.moveUp = true;
            }
        });
        document.addEventListener('keyup', (e) => {
            if (e.key == 'q' || e.key == 'Q') {
                this.moveDown = false;
            }
            if (e.key == 'e' || e.key == 'E') {
                this.moveUp = false;
            }
        })
    }
})