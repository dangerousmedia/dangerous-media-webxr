AFRAME.registerComponent('generate-terrain', {
    init: function () {
      let el = this.el;
      
      for (let i = 0; i < 50; i++) {
        for (let k = 0; k < 50; k++) {
          let tile = document.createElement('a-entity');
          tile.setAttribute('geometry', {
            primitive: 'plane',
            height: 1,
            width: 1,
            
          });
          // https://cdn.glitch.global/4888167a-4fcb-4871-87d9-5d7ea8524c9b/TexturesCom_Grass0126_1_seamless_S.jpg?v=1667237630099
          tile.setAttribute('material', 'src: #grass');
          tile.setAttribute('position', {x: i - 12, y: k - 12, z: -1.6});
          console.log(tile);
          this.el.appendChild(tile);
        }
      }
    },
    
  });