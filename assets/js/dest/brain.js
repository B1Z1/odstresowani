"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function r(n) {
    if (t[n]) return t[n].exports;
    var a = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
  }

  r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) {
      r.d(n, a, function (t) {
        return e[t];
      }.bind(null, a));
    }
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 0);
}([function (e, t, r) {
  "use strict";

  r.r(t);
  r(1);

  var n =
  /*#__PURE__*/
  function () {
    function n() {
      _classCallCheck(this, n);

      this.counter = 0, this.scene = new THREE.Scene(), this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1e3), this.renderer = new THREE.WebGLRenderer(), this.loader = new THREE.FBXLoader(), this.modelLink = "https://odstresowani.pl/wp-content/uploads/brain.fbx", this.object3D = [], this.container = {
        element: document.querySelector("[data-dna-three]")
      }, this.container.width = this.container.element.offsetWidth, this.container.height = this.container.element.offsetHeight, this.init();
    }

    _createClass(n, [{
      key: "init",
      value: function init() {
        var _this = this;

        this.renderer.setSize(this.container.width, this.container.height), this.container.element.appendChild(this.renderer.domElement), this.scene.add(this.axesHelper), this.getModel(), this.lightScene(), this.cameraPosition(), this.changePositionObject3D(), window.addEventListener("resize", function () {
          _this.updateResize();
        });
      }
    }, {
      key: "lightScene",
      value: function lightScene() {
        var e = new THREE.DirectionalLight(new THREE.Color("hsl(30, 100%, 90%)"), 1);
        e.position.set(-100, 0, 100);
        var t = new THREE.DirectionalLight(new THREE.Color("hsl(240, 100%, 75%)"), .75);
        t.position.set(100, 0, 100);
        var r = new THREE.DirectionalLight(16777215, 1);
        r.position.set(100, 0, -100), this.scene.add(e), this.scene.add(t), this.scene.add(r), this.scene.background = new THREE.Color(16316664);
      }
    }, {
      key: "cameraPosition",
      value: function cameraPosition() {
        this.camera.position.z = 8, this.camera.position.y = 1;
      }
    }, {
      key: "getModel",
      value: function getModel() {
        var _this2 = this;

        this.loader.load(this.modelLink, function (e) {
          _this2.object3D = e, _this2.object3D.scale.x = .01, _this2.object3D.scale.y = .01, _this2.object3D.scale.z = .01, _this2.object3D.rotation.x = .2, _this2.object3D.rotation.y = -.8, _this2.object3D.rotation.z = .1, _this2.object3D.position.x = 5, _this2.object3D.position.y = -.5, _this2.object3D.position.z = 1, _this2.scene.add(_this2.object3D), _this2.update();
        }, void 0, function (e) {
          console.log(e);
        });
      }
    }, {
      key: "updateResize",
      value: function updateResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.updateProjectionMatrix(), this.container.width = this.container.element.offsetWidth, this.container.height = this.container.element.offsetHeight, this.renderer.setSize(this.container.width, this.container.height);
      }
    }, {
      key: "update",
      value: function update() {
        var _this3 = this;

        requestAnimationFrame(function () {
          _this3.update();
        }), this.counter++, this.renderer.render(this.scene, this.camera);
      }
    }, {
      key: "changePositionObject3D",
      value: function changePositionObject3D() {
        var _this4 = this;

        window.addEventListener("mousemove", function (e) {
          var t = e.clientX / 5,
              r = e.clientY / 5,
              n = t / window.innerWidth,
              a = r / window.innerHeight;
          _this4.object3D.rotation.y = n - .8, _this4.object3D.rotation.x = a + .2, _this4.object3D.rotation.z = a + .1;
        });
      }
    }]);

    return n;
  }();

  window.addEventListener("load", function () {
    new n();
  });
}, function (e, t) {
  THREE.FBXLoader = function () {
    var e, t, r;

    function n(e) {
      this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager;
    }

    function a(e) {
      this.textureLoader = e;
    }

    function i() {}

    function o() {}

    function s() {}

    function u() {}

    function l(e, t) {
      this.dv = new DataView(e), this.offset = 0, this.littleEndian = void 0 === t || t;
    }

    function c() {}

    function p(e) {
      var t = e.match(/FBXVersion: (\d+)/);
      if (t) return parseInt(t[1]);
      throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
    }

    function h(e) {
      return e / 46186158e3;
    }

    n.prototype = {
      constructor: n,
      crossOrigin: "anonymous",
      load: function load(e, t, r, n) {
        var a = this,
            i = void 0 === a.path ? THREE.LoaderUtils.extractUrlBase(e) : a.path,
            o = new THREE.FileLoader(this.manager);
        o.setPath(a.path), o.setResponseType("arraybuffer"), o.load(e, function (r) {
          try {
            t(a.parse(r, i));
          } catch (t) {
            setTimeout(function () {
              n && n(t), a.manager.itemError(e);
            }, 0);
          }
        }, r, n);
      },
      setPath: function setPath(e) {
        return this.path = e, this;
      },
      setResourcePath: function setResourcePath(e) {
        return this.resourcePath = e, this;
      },
      setCrossOrigin: function setCrossOrigin(e) {
        return this.crossOrigin = e, this;
      },
      parse: function parse(t, r) {
        if (o = "Kaydara FBX Binary  \0", (i = t).byteLength >= o.length && o === T(i, 0, o.length)) e = new u().parse(t);else {
          var n = T(t);
          if (!function (e) {
            var t = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"],
                r = 0;

            function n(t) {
              var n = e[t - 1];
              return e = e.slice(r + t), r++, n;
            }

            for (var a = 0; a < t.length; ++a) {
              var i = n(1);
              if (i === t[a]) return !1;
            }

            return !0;
          }(n)) throw new Error("THREE.FBXLoader: Unknown format.");
          if (p(n) < 7e3) throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + p(n));
          e = new s().parse(n);
        }
        var i, o;
        return new a(new THREE.TextureLoader(this.manager).setPath(this.resourcePath || r).setCrossOrigin(this.crossOrigin)).parse(e);
      }
    }, a.prototype = {
      constructor: a,
      parse: function parse() {
        t = this.parseConnections();
        var e = this.parseImages(),
            n = this.parseTextures(e),
            a = this.parseMaterials(n),
            o = this.parseDeformers(),
            s = new i().parse(o);
        return this.parseScene(o, s, a), r;
      },
      parseConnections: function parseConnections() {
        var t = new Map();
        "Connections" in e && e.Connections.connections.forEach(function (e) {
          var r = e[0],
              n = e[1],
              a = e[2];
          t.has(r) || t.set(r, {
            parents: [],
            children: []
          });
          var i = {
            ID: n,
            relationship: a
          };
          t.get(r).parents.push(i), t.has(n) || t.set(n, {
            parents: [],
            children: []
          });
          var o = {
            ID: r,
            relationship: a
          };
          t.get(n).children.push(o);
        });
        return t;
      },
      parseImages: function parseImages() {
        var t = {},
            r = {};

        if ("Video" in e.Objects) {
          var n = e.Objects.Video;

          for (var a in n) {
            var i = n[a];

            if (t[l = parseInt(a)] = i.RelativeFilename || i.Filename, "Content" in i) {
              var o = i.Content instanceof ArrayBuffer && i.Content.byteLength > 0,
                  s = "string" == typeof i.Content && "" !== i.Content;

              if (o || s) {
                var u = this.parseImage(n[a]);
                r[i.RelativeFilename || i.Filename] = u;
              }
            }
          }
        }

        for (var l in t) {
          var c = t[l];
          void 0 !== r[c] ? t[l] = r[c] : t[l] = t[l].split("\\").pop();
        }

        return t;
      },
      parseImage: function parseImage(e) {
        var t,
            r = e.Content,
            n = e.RelativeFilename || e.Filename,
            a = n.slice(n.lastIndexOf(".") + 1).toLowerCase();

        switch (a) {
          case "bmp":
            t = "image/bmp";
            break;

          case "jpg":
          case "jpeg":
            t = "image/jpeg";
            break;

          case "png":
            t = "image/png";
            break;

          case "tif":
            t = "image/tiff";
            break;

          case "tga":
            if ("function" != typeof THREE.TGALoader) return void console.warn("FBXLoader: THREE.TGALoader is required to load TGA textures");

            if (null === THREE.Loader.Handlers.get(".tga")) {
              var i = new THREE.TGALoader();
              i.setPath(this.textureLoader.path), THREE.Loader.Handlers.add(/\.tga$/i, i);
            }

            t = "image/tga";
            break;

          default:
            return void console.warn('FBXLoader: Image type "' + a + '" is not supported.');
        }

        if ("string" == typeof r) return "data:" + t + ";base64," + r;
        var o = new Uint8Array(r);
        return window.URL.createObjectURL(new Blob([o], {
          type: t
        }));
      },
      parseTextures: function parseTextures(t) {
        var r = new Map();

        if ("Texture" in e.Objects) {
          var n = e.Objects.Texture;

          for (var a in n) {
            var i = this.parseTexture(n[a], t);
            r.set(parseInt(a), i);
          }
        }

        return r;
      },
      parseTexture: function parseTexture(e, t) {
        var r = this.loadTexture(e, t);
        r.ID = e.id, r.name = e.attrName;
        var n = e.WrapModeU,
            a = e.WrapModeV,
            i = void 0 !== n ? n.value : 0,
            o = void 0 !== a ? a.value : 0;

        if (r.wrapS = 0 === i ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping, r.wrapT = 0 === o ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping, "Scaling" in e) {
          var s = e.Scaling.value;
          r.repeat.x = s[0], r.repeat.y = s[1];
        }

        return r;
      },
      loadTexture: function loadTexture(e, r) {
        var n,
            a,
            i = this.textureLoader.path,
            o = t.get(e.id).children;
        void 0 !== o && o.length > 0 && void 0 !== r[o[0].ID] && (0 !== (n = r[o[0].ID]).indexOf("blob:") && 0 !== n.indexOf("data:") || this.textureLoader.setPath(void 0));
        var s = e.FileName.slice(-3).toLowerCase();

        if ("tga" === s) {
          var u = THREE.Loader.Handlers.get(".tga");
          null === u ? (console.warn("FBXLoader: TGALoader not found, creating empty placeholder texture for", n), a = new THREE.Texture()) : a = u.load(n);
        } else "psd" === s ? (console.warn("FBXLoader: PSD textures are not supported, creating empty placeholder texture for", n), a = new THREE.Texture()) : a = this.textureLoader.load(n);

        return this.textureLoader.setPath(i), a;
      },
      parseMaterials: function parseMaterials(t) {
        var r = new Map();

        if ("Material" in e.Objects) {
          var n = e.Objects.Material;

          for (var a in n) {
            var i = this.parseMaterial(n[a], t);
            null !== i && r.set(parseInt(a), i);
          }
        }

        return r;
      },
      parseMaterial: function parseMaterial(e, r) {
        var n = e.id,
            a = e.attrName,
            i = e.ShadingModel;
        if ("object" == _typeof(i) && (i = i.value), !t.has(n)) return null;
        var o,
            s = this.parseParameters(e, r, n);

        switch (i.toLowerCase()) {
          case "phong":
            o = new THREE.MeshPhongMaterial();
            break;

          case "lambert":
            o = new THREE.MeshLambertMaterial();
            break;

          default:
            console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', i), o = new THREE.MeshPhongMaterial();
        }

        return o.setValues(s), o.name = a, o;
      },
      parseParameters: function parseParameters(e, r, n) {
        var a = {};
        e.BumpFactor && (a.bumpScale = e.BumpFactor.value), e.Diffuse ? a.color = new THREE.Color().fromArray(e.Diffuse.value) : e.DiffuseColor && "Color" === e.DiffuseColor.type && (a.color = new THREE.Color().fromArray(e.DiffuseColor.value)), e.DisplacementFactor && (a.displacementScale = e.DisplacementFactor.value), e.Emissive ? a.emissive = new THREE.Color().fromArray(e.Emissive.value) : e.EmissiveColor && "Color" === e.EmissiveColor.type && (a.emissive = new THREE.Color().fromArray(e.EmissiveColor.value)), e.EmissiveFactor && (a.emissiveIntensity = parseFloat(e.EmissiveFactor.value)), e.Opacity && (a.opacity = parseFloat(e.Opacity.value)), a.opacity < 1 && (a.transparent = !0), e.ReflectionFactor && (a.reflectivity = e.ReflectionFactor.value), e.Shininess && (a.shininess = e.Shininess.value), e.Specular ? a.specular = new THREE.Color().fromArray(e.Specular.value) : e.SpecularColor && "Color" === e.SpecularColor.type && (a.specular = new THREE.Color().fromArray(e.SpecularColor.value));
        var i = this;
        return t.get(n).children.forEach(function (e) {
          var t = e.relationship;

          switch (t) {
            case "Bump":
              a.bumpMap = i.getTexture(r, e.ID);
              break;

            case "Maya|TEX_ao_map":
              a.aoMap = i.getTexture(r, e.ID);
              break;

            case "DiffuseColor":
            case "Maya|TEX_color_map":
              a.map = i.getTexture(r, e.ID);
              break;

            case "DisplacementColor":
              a.displacementMap = i.getTexture(r, e.ID);
              break;

            case "EmissiveColor":
              a.emissiveMap = i.getTexture(r, e.ID);
              break;

            case "NormalMap":
            case "Maya|TEX_normal_map":
              a.normalMap = i.getTexture(r, e.ID);
              break;

            case "ReflectionColor":
              a.envMap = i.getTexture(r, e.ID), a.envMap.mapping = THREE.EquirectangularReflectionMapping;
              break;

            case "SpecularColor":
              a.specularMap = i.getTexture(r, e.ID);
              break;

            case "TransparentColor":
              a.alphaMap = i.getTexture(r, e.ID), a.transparent = !0;
              break;

            case "AmbientColor":
            case "ShininessExponent":
            case "SpecularFactor":
            case "VectorDisplacementColor":
            default:
              console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", t);
          }
        }), a;
      },
      getTexture: function getTexture(r, n) {
        return "LayeredTexture" in e.Objects && n in e.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), n = t.get(n).children[0].ID), r.get(n);
      },
      parseDeformers: function parseDeformers() {
        var r = {},
            n = {};

        if ("Deformer" in e.Objects) {
          var a = e.Objects.Deformer;

          for (var i in a) {
            var o = a[i],
                s = t.get(parseInt(i));

            if ("Skin" === o.attrType) {
              var u = this.parseSkeleton(s, a);
              u.ID = i, s.parents.length > 1 && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), u.geometryID = s.parents[0].ID, r[i] = u;
            } else if ("BlendShape" === o.attrType) {
              var l = {
                id: i
              };
              l.rawTargets = this.parseMorphTargets(s, a), l.id = i, s.parents.length > 1 && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."), n[i] = l;
            }
          }
        }

        return {
          skeletons: r,
          morphTargets: n
        };
      },
      parseSkeleton: function parseSkeleton(e, t) {
        var r = [];
        return e.children.forEach(function (e) {
          var n = t[e.ID];

          if ("Cluster" === n.attrType) {
            var a = {
              ID: e.ID,
              indices: [],
              weights: [],
              transformLink: new THREE.Matrix4().fromArray(n.TransformLink.a)
            };
            "Indexes" in n && (a.indices = n.Indexes.a, a.weights = n.Weights.a), r.push(a);
          }
        }), {
          rawBones: r,
          bones: []
        };
      },
      parseMorphTargets: function parseMorphTargets(e, r) {
        for (var n = [], a = 0; a < e.children.length; a++) {
          var i = e.children[a],
              o = r[i.ID],
              s = {
            name: o.attrName,
            initialWeight: o.DeformPercent,
            id: o.id,
            fullWeights: o.FullWeights.a
          };
          if ("BlendShapeChannel" !== o.attrType) return;
          s.geoID = t.get(parseInt(i.ID)).children.filter(function (e) {
            return void 0 === e.relationship;
          })[0].ID, n.push(s);
        }

        return n;
      },
      parseScene: function parseScene(n, a, i) {
        r = new THREE.Group();
        var s = this.parseModels(n.skeletons, a, i),
            u = e.Objects.Model,
            l = this;
        s.forEach(function (e) {
          var n = u[e.ID];
          l.setLookAtProperties(e, n), t.get(e.ID).parents.forEach(function (t) {
            var r = s.get(t.ID);
            void 0 !== r && r.add(e);
          }), null === e.parent && r.add(e);
        }), this.bindSkeleton(n.skeletons, a, s), this.createAmbientLight(), this.setupMorphMaterials(), r.traverse(function (e) {
          if (e.userData.transformData) {
            e.parent && (e.userData.transformData.parentMatrixWorld = e.parent.matrix);
            var t = g(e.userData.transformData);
            e.applyMatrix(t);
          }
        });
        var c = new o().parse();
        1 === r.children.length && r.children[0].isGroup && (r.children[0].animations = c, r = r.children[0]), r.animations = c;
      },
      parseModels: function parseModels(r, n, a) {
        var i = new Map(),
            o = e.Objects.Model;

        for (var s in o) {
          var u = parseInt(s),
              l = o[s],
              c = t.get(u),
              p = this.buildSkeleton(c, r, u, l.attrName);

          if (!p) {
            switch (l.attrType) {
              case "Camera":
                p = this.createCamera(c);
                break;

              case "Light":
                p = this.createLight(c);
                break;

              case "Mesh":
                p = this.createMesh(c, n, a);
                break;

              case "NurbsCurve":
                p = this.createCurve(c, n);
                break;

              case "LimbNode":
              case "Root":
                p = new THREE.Bone();
                break;

              case "Null":
              default:
                p = new THREE.Group();
            }

            p.name = THREE.PropertyBinding.sanitizeNodeName(l.attrName), p.ID = u;
          }

          this.getTransformData(p, l), i.set(u, p);
        }

        return i;
      },
      buildSkeleton: function buildSkeleton(e, t, r, n) {
        var a = null;
        return e.parents.forEach(function (e) {
          for (var i in t) {
            var o = t[i];
            o.rawBones.forEach(function (t, i) {
              if (t.ID === e.ID) {
                var s = a;
                (a = new THREE.Bone()).matrixWorld.copy(t.transformLink), a.name = THREE.PropertyBinding.sanitizeNodeName(n), a.ID = r, o.bones[i] = a, null !== s && a.add(s);
              }
            });
          }
        }), a;
      },
      createCamera: function createCamera(t) {
        var r, n;
        if (t.children.forEach(function (t) {
          var r = e.Objects.NodeAttribute[t.ID];
          void 0 !== r && (n = r);
        }), void 0 === n) r = new THREE.Object3D();else {
          var a = 0;
          void 0 !== n.CameraProjectionType && 1 === n.CameraProjectionType.value && (a = 1);
          var i = 1;
          void 0 !== n.NearPlane && (i = n.NearPlane.value / 1e3);
          var o = 1e3;
          void 0 !== n.FarPlane && (o = n.FarPlane.value / 1e3);
          var s = window.innerWidth,
              u = window.innerHeight;
          void 0 !== n.AspectWidth && void 0 !== n.AspectHeight && (s = n.AspectWidth.value, u = n.AspectHeight.value);
          var l = s / u,
              c = 45;
          void 0 !== n.FieldOfView && (c = n.FieldOfView.value);
          var p = n.FocalLength ? n.FocalLength.value : null;

          switch (a) {
            case 0:
              r = new THREE.PerspectiveCamera(c, l, i, o), null !== p && r.setFocalLength(p);
              break;

            case 1:
              r = new THREE.OrthographicCamera(-s / 2, s / 2, u / 2, -u / 2, i, o);
              break;

            default:
              console.warn("THREE.FBXLoader: Unknown camera type " + a + "."), r = new THREE.Object3D();
          }
        }
        return r;
      },
      createLight: function createLight(t) {
        var r, n;
        if (t.children.forEach(function (t) {
          var r = e.Objects.NodeAttribute[t.ID];
          void 0 !== r && (n = r);
        }), void 0 === n) r = new THREE.Object3D();else {
          var a;
          a = void 0 === n.LightType ? 0 : n.LightType.value;
          var i = 16777215;
          void 0 !== n.Color && (i = new THREE.Color().fromArray(n.Color.value));
          var o = void 0 === n.Intensity ? 1 : n.Intensity.value / 100;
          void 0 !== n.CastLightOnObject && 0 === n.CastLightOnObject.value && (o = 0);
          var s = 0;
          void 0 !== n.FarAttenuationEnd && (s = void 0 !== n.EnableFarAttenuation && 0 === n.EnableFarAttenuation.value ? 0 : n.FarAttenuationEnd.value);

          switch (a) {
            case 0:
              r = new THREE.PointLight(i, o, s, 1);
              break;

            case 1:
              r = new THREE.DirectionalLight(i, o);
              break;

            case 2:
              var u = Math.PI / 3;
              void 0 !== n.InnerAngle && (u = THREE.Math.degToRad(n.InnerAngle.value));
              var l = 0;
              void 0 !== n.OuterAngle && (l = THREE.Math.degToRad(n.OuterAngle.value), l = Math.max(l, 1)), r = new THREE.SpotLight(i, o, s, u, l, 1);
              break;

            default:
              console.warn("THREE.FBXLoader: Unknown light type " + n.LightType.value + ", defaulting to a THREE.PointLight."), r = new THREE.PointLight(i, o);
          }

          void 0 !== n.CastShadows && 1 === n.CastShadows.value && (r.castShadow = !0);
        }
        return r;
      },
      createMesh: function createMesh(e, t, r) {
        var n,
            a = null,
            i = null,
            o = [];
        return e.children.forEach(function (e) {
          t.has(e.ID) && (a = t.get(e.ID)), r.has(e.ID) && o.push(r.get(e.ID));
        }), o.length > 1 ? i = o : o.length > 0 ? i = o[0] : (i = new THREE.MeshPhongMaterial({
          color: 13421772
        }), o.push(i)), "color" in a.attributes && o.forEach(function (e) {
          e.vertexColors = THREE.VertexColors;
        }), a.FBX_Deformer ? (o.forEach(function (e) {
          e.skinning = !0;
        }), (n = new THREE.SkinnedMesh(a, i)).normalizeSkinWeights()) : n = new THREE.Mesh(a, i), n;
      },
      createCurve: function createCurve(e, t) {
        var r = e.children.reduce(function (e, r) {
          return t.has(r.ID) && (e = t.get(r.ID)), e;
        }, null),
            n = new THREE.LineBasicMaterial({
          color: 3342591,
          linewidth: 1
        });
        return new THREE.Line(r, n);
      },
      getTransformData: function getTransformData(e, t) {
        var r = {};
        "InheritType" in t && (r.inheritType = parseInt(t.InheritType.value)), r.eulerOrder = "RotationOrder" in t ? E(t.RotationOrder.value) : "ZYX", "Lcl_Translation" in t && (r.translation = t.Lcl_Translation.value), "PreRotation" in t && (r.preRotation = t.PreRotation.value), "Lcl_Rotation" in t && (r.rotation = t.Lcl_Rotation.value), "PostRotation" in t && (r.postRotation = t.PostRotation.value), "Lcl_Scaling" in t && (r.scale = t.Lcl_Scaling.value), "ScalingOffset" in t && (r.scalingOffset = t.ScalingOffset.value), "ScalingPivot" in t && (r.scalingPivot = t.ScalingPivot.value), "RotationOffset" in t && (r.rotationOffset = t.RotationOffset.value), "RotationPivot" in t && (r.rotationPivot = t.RotationPivot.value), e.userData.transformData = r;
      },
      setLookAtProperties: function setLookAtProperties(n, a) {
        "LookAtProperty" in a && t.get(n.ID).children.forEach(function (t) {
          if ("LookAtProperty" === t.relationship) {
            var a = e.Objects.Model[t.ID];

            if ("Lcl_Translation" in a) {
              var i = a.Lcl_Translation.value;
              void 0 !== n.target ? (n.target.position.fromArray(i), r.add(n.target)) : n.lookAt(new THREE.Vector3().fromArray(i));
            }
          }
        });
      },
      bindSkeleton: function bindSkeleton(e, r, n) {
        var a = this.parsePoseNodes();

        for (var i in e) {
          var o = e[i];
          t.get(parseInt(o.ID)).parents.forEach(function (e) {
            if (r.has(e.ID)) {
              var i = e.ID;
              t.get(i).parents.forEach(function (e) {
                n.has(e.ID) && n.get(e.ID).bind(new THREE.Skeleton(o.bones), a[e.ID]);
              });
            }
          });
        }
      },
      parsePoseNodes: function parsePoseNodes() {
        var t = {};

        if ("Pose" in e.Objects) {
          var r = e.Objects.Pose;

          for (var n in r) {
            if ("BindPose" === r[n].attrType) {
              var a = r[n].PoseNode;
              Array.isArray(a) ? a.forEach(function (e) {
                t[e.Node] = new THREE.Matrix4().fromArray(e.Matrix.a);
              }) : t[a.Node] = new THREE.Matrix4().fromArray(a.Matrix.a);
            }
          }
        }

        return t;
      },
      createAmbientLight: function createAmbientLight() {
        if ("GlobalSettings" in e && "AmbientColor" in e.GlobalSettings) {
          var t = e.GlobalSettings.AmbientColor.value,
              n = t[0],
              a = t[1],
              i = t[2];

          if (0 !== n || 0 !== a || 0 !== i) {
            var o = new THREE.Color(n, a, i);
            r.add(new THREE.AmbientLight(o, 1));
          }
        }
      },
      setupMorphMaterials: function setupMorphMaterials() {
        var e = this;
        r.traverse(function (t) {
          t.isMesh && t.geometry.morphAttributes.position && t.geometry.morphAttributes.position.length && (Array.isArray(t.material) ? t.material.forEach(function (r, n) {
            e.setupMorphMaterial(t, r, n);
          }) : e.setupMorphMaterial(t, t.material));
        });
      },
      setupMorphMaterial: function setupMorphMaterial(e, t, n) {
        var a = e.uuid,
            i = t.uuid,
            o = !1;

        if (r.traverse(function (e) {
          e.isMesh && (Array.isArray(e.material) ? e.material.forEach(function (t) {
            t.uuid === i && e.uuid !== a && (o = !0);
          }) : e.material.uuid === i && e.uuid !== a && (o = !0));
        }), !0 === o) {
          var s = t.clone();
          s.morphTargets = !0, void 0 === n ? e.material = s : e.material[n] = s;
        } else t.morphTargets = !0;
      }
    }, i.prototype = {
      constructor: i,
      parse: function parse(r) {
        var n = new Map();

        if ("Geometry" in e.Objects) {
          var a = e.Objects.Geometry;

          for (var i in a) {
            var o = t.get(parseInt(i)),
                s = this.parseGeometry(o, a[i], r);
            n.set(parseInt(i), s);
          }
        }

        return n;
      },
      parseGeometry: function parseGeometry(e, t, r) {
        switch (t.attrType) {
          case "Mesh":
            return this.parseMeshGeometry(e, t, r);

          case "NurbsCurve":
            return this.parseNurbsGeometry(t);
        }
      },
      parseMeshGeometry: function parseMeshGeometry(t, r, n) {
        var a = n.skeletons,
            i = n.morphTargets,
            o = t.parents.map(function (t) {
          return e.Objects.Model[t.ID];
        });

        if (0 !== o.length) {
          var s = t.children.reduce(function (e, t) {
            return void 0 !== a[t.ID] && (e = a[t.ID]), e;
          }, null),
              u = t.children.reduce(function (e, t) {
            return void 0 !== i[t.ID] && (e = i[t.ID]), e;
          }, null),
              l = o[0],
              c = {};
          "RotationOrder" in l && (c.eulerOrder = E(l.RotationOrder.value)), "InheritType" in l && (c.inheritType = parseInt(l.InheritType.value)), "GeometricTranslation" in l && (c.translation = l.GeometricTranslation.value), "GeometricRotation" in l && (c.rotation = l.GeometricRotation.value), "GeometricScaling" in l && (c.scale = l.GeometricScaling.value);
          var p = g(c);
          return this.genGeometry(r, s, u, p);
        }
      },
      genGeometry: function genGeometry(e, t, r, n) {
        var a = new THREE.BufferGeometry();
        e.attrName && (a.name = e.attrName);
        var i = this.parseGeoNode(e, t),
            o = this.genBuffers(i),
            s = new THREE.Float32BufferAttribute(o.vertex, 3);

        if (n.applyToBufferAttribute(s), a.addAttribute("position", s), o.colors.length > 0 && a.addAttribute("color", new THREE.Float32BufferAttribute(o.colors, 3)), t && (a.addAttribute("skinIndex", new THREE.Uint16BufferAttribute(o.weightsIndices, 4)), a.addAttribute("skinWeight", new THREE.Float32BufferAttribute(o.vertexWeights, 4)), a.FBX_Deformer = t), o.normal.length > 0) {
          var u = new THREE.Float32BufferAttribute(o.normal, 3);
          new THREE.Matrix3().getNormalMatrix(n).applyToBufferAttribute(u), a.addAttribute("normal", u);
        }

        if (o.uvs.forEach(function (e, t) {
          var r = "uv" + (t + 1).toString();
          0 === t && (r = "uv"), a.addAttribute(r, new THREE.Float32BufferAttribute(o.uvs[t], 2));
        }), i.material && "AllSame" !== i.material.mappingType) {
          var l = o.materialIndex[0],
              c = 0;

          if (o.materialIndex.forEach(function (e, t) {
            e !== l && (a.addGroup(c, t - c, l), l = e, c = t);
          }), a.groups.length > 0) {
            var p = a.groups[a.groups.length - 1],
                h = p.start + p.count;
            h !== o.materialIndex.length && a.addGroup(h, o.materialIndex.length - h, l);
          }

          0 === a.groups.length && a.addGroup(0, o.materialIndex.length, o.materialIndex[0]);
        }

        return this.addMorphTargets(a, e, r, n), a;
      },
      parseGeoNode: function parseGeoNode(e, t) {
        var r = {};

        if (r.vertexPositions = void 0 !== e.Vertices ? e.Vertices.a : [], r.vertexIndices = void 0 !== e.PolygonVertexIndex ? e.PolygonVertexIndex.a : [], e.LayerElementColor && (r.color = this.parseVertexColors(e.LayerElementColor[0])), e.LayerElementMaterial && (r.material = this.parseMaterialIndices(e.LayerElementMaterial[0])), e.LayerElementNormal && (r.normal = this.parseNormals(e.LayerElementNormal[0])), e.LayerElementUV) {
          r.uv = [];

          for (var n = 0; e.LayerElementUV[n];) {
            r.uv.push(this.parseUVs(e.LayerElementUV[n])), n++;
          }
        }

        return r.weightTable = {}, null !== t && (r.skeleton = t, t.rawBones.forEach(function (e, t) {
          e.indices.forEach(function (n, a) {
            void 0 === r.weightTable[n] && (r.weightTable[n] = []), r.weightTable[n].push({
              id: t,
              weight: e.weights[a]
            });
          });
        })), r;
      },
      genBuffers: function genBuffers(e) {
        var t = {
          vertex: [],
          normal: [],
          colors: [],
          uvs: [],
          materialIndex: [],
          vertexWeights: [],
          weightsIndices: []
        },
            r = 0,
            n = 0,
            a = !1,
            i = [],
            o = [],
            s = [],
            u = [],
            l = [],
            c = [],
            p = this;
        return e.vertexIndices.forEach(function (h, f) {
          var v = !1;
          h < 0 && (h ^= -1, v = !0);
          var m = [],
              g = [];

          if (i.push(3 * h, 3 * h + 1, 3 * h + 2), e.color) {
            var E = d(f, r, h, e.color);
            s.push(E[0], E[1], E[2]);
          }

          if (e.skeleton) {
            if (void 0 !== e.weightTable[h] && e.weightTable[h].forEach(function (e) {
              g.push(e.weight), m.push(e.id);
            }), g.length > 4) {
              a || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), a = !0);
              var y = [0, 0, 0, 0],
                  T = [0, 0, 0, 0];
              g.forEach(function (e, t) {
                var r = e,
                    n = m[t];
                T.forEach(function (e, t, a) {
                  if (r > e) {
                    a[t] = r, r = e;
                    var i = y[t];
                    y[t] = n, n = i;
                  }
                });
              }), m = y, g = T;
            }

            for (; g.length < 4;) {
              g.push(0), m.push(0);
            }

            for (var w = 0; w < 4; ++w) {
              l.push(g[w]), c.push(m[w]);
            }
          }

          if (e.normal) {
            E = d(f, r, h, e.normal);
            o.push(E[0], E[1], E[2]);
          }

          if (e.material && "AllSame" !== e.material.mappingType) var R = d(f, r, h, e.material)[0];
          e.uv && e.uv.forEach(function (e, t) {
            var n = d(f, r, h, e);
            void 0 === u[t] && (u[t] = []), u[t].push(n[0]), u[t].push(n[1]);
          }), n++, v && (p.genFace(t, e, i, R, o, s, u, l, c, n), r++, n = 0, i = [], o = [], s = [], u = [], l = [], c = []);
        }), t;
      },
      genFace: function genFace(e, t, r, n, a, i, o, s, u, l) {
        for (var c = 2; c < l; c++) {
          e.vertex.push(t.vertexPositions[r[0]]), e.vertex.push(t.vertexPositions[r[1]]), e.vertex.push(t.vertexPositions[r[2]]), e.vertex.push(t.vertexPositions[r[3 * (c - 1)]]), e.vertex.push(t.vertexPositions[r[3 * (c - 1) + 1]]), e.vertex.push(t.vertexPositions[r[3 * (c - 1) + 2]]), e.vertex.push(t.vertexPositions[r[3 * c]]), e.vertex.push(t.vertexPositions[r[3 * c + 1]]), e.vertex.push(t.vertexPositions[r[3 * c + 2]]), t.skeleton && (e.vertexWeights.push(s[0]), e.vertexWeights.push(s[1]), e.vertexWeights.push(s[2]), e.vertexWeights.push(s[3]), e.vertexWeights.push(s[4 * (c - 1)]), e.vertexWeights.push(s[4 * (c - 1) + 1]), e.vertexWeights.push(s[4 * (c - 1) + 2]), e.vertexWeights.push(s[4 * (c - 1) + 3]), e.vertexWeights.push(s[4 * c]), e.vertexWeights.push(s[4 * c + 1]), e.vertexWeights.push(s[4 * c + 2]), e.vertexWeights.push(s[4 * c + 3]), e.weightsIndices.push(u[0]), e.weightsIndices.push(u[1]), e.weightsIndices.push(u[2]), e.weightsIndices.push(u[3]), e.weightsIndices.push(u[4 * (c - 1)]), e.weightsIndices.push(u[4 * (c - 1) + 1]), e.weightsIndices.push(u[4 * (c - 1) + 2]), e.weightsIndices.push(u[4 * (c - 1) + 3]), e.weightsIndices.push(u[4 * c]), e.weightsIndices.push(u[4 * c + 1]), e.weightsIndices.push(u[4 * c + 2]), e.weightsIndices.push(u[4 * c + 3])), t.color && (e.colors.push(i[0]), e.colors.push(i[1]), e.colors.push(i[2]), e.colors.push(i[3 * (c - 1)]), e.colors.push(i[3 * (c - 1) + 1]), e.colors.push(i[3 * (c - 1) + 2]), e.colors.push(i[3 * c]), e.colors.push(i[3 * c + 1]), e.colors.push(i[3 * c + 2])), t.material && "AllSame" !== t.material.mappingType && (e.materialIndex.push(n), e.materialIndex.push(n), e.materialIndex.push(n)), t.normal && (e.normal.push(a[0]), e.normal.push(a[1]), e.normal.push(a[2]), e.normal.push(a[3 * (c - 1)]), e.normal.push(a[3 * (c - 1) + 1]), e.normal.push(a[3 * (c - 1) + 2]), e.normal.push(a[3 * c]), e.normal.push(a[3 * c + 1]), e.normal.push(a[3 * c + 2])), t.uv && t.uv.forEach(function (t, r) {
            void 0 === e.uvs[r] && (e.uvs[r] = []), e.uvs[r].push(o[r][0]), e.uvs[r].push(o[r][1]), e.uvs[r].push(o[r][2 * (c - 1)]), e.uvs[r].push(o[r][2 * (c - 1) + 1]), e.uvs[r].push(o[r][2 * c]), e.uvs[r].push(o[r][2 * c + 1]);
          });
        }
      },
      addMorphTargets: function addMorphTargets(t, r, n, a) {
        if (null !== n) {
          t.morphAttributes.position = [];
          var i = this;
          n.rawTargets.forEach(function (n) {
            var o = e.Objects.Geometry[n.geoID];
            void 0 !== o && i.genMorphGeometry(t, r, o, a, n.name);
          });
        }
      },
      genMorphGeometry: function genMorphGeometry(e, t, r, n, a) {
        var i = new THREE.BufferGeometry();
        r.attrName && (i.name = r.attrName);

        for (var o = void 0 !== t.PolygonVertexIndex ? t.PolygonVertexIndex.a : [], s = void 0 !== t.Vertices ? t.Vertices.a.slice() : [], u = void 0 !== r.Vertices ? r.Vertices.a : [], l = void 0 !== r.Indexes ? r.Indexes.a : [], c = 0; c < l.length; c++) {
          var p = 3 * l[c];
          s[p] += u[3 * c], s[p + 1] += u[3 * c + 1], s[p + 2] += u[3 * c + 2];
        }

        var h = {
          vertexIndices: o,
          vertexPositions: s
        },
            f = this.genBuffers(h),
            d = new THREE.Float32BufferAttribute(f.vertex, 3);
        d.name = a || r.attrName, n.applyToBufferAttribute(d), e.morphAttributes.position.push(d);
      },
      parseNormals: function parseNormals(e) {
        var t = e.MappingInformationType,
            r = e.ReferenceInformationType,
            n = e.Normals.a,
            a = [];
        return "IndexToDirect" === r && ("NormalIndex" in e ? a = e.NormalIndex.a : "NormalsIndex" in e && (a = e.NormalsIndex.a)), {
          dataSize: 3,
          buffer: n,
          indices: a,
          mappingType: t,
          referenceType: r
        };
      },
      parseUVs: function parseUVs(e) {
        var t = e.MappingInformationType,
            r = e.ReferenceInformationType,
            n = e.UV.a,
            a = [];
        return "IndexToDirect" === r && (a = e.UVIndex.a), {
          dataSize: 2,
          buffer: n,
          indices: a,
          mappingType: t,
          referenceType: r
        };
      },
      parseVertexColors: function parseVertexColors(e) {
        var t = e.MappingInformationType,
            r = e.ReferenceInformationType,
            n = e.Colors.a,
            a = [];
        return "IndexToDirect" === r && (a = e.ColorIndex.a), {
          dataSize: 4,
          buffer: n,
          indices: a,
          mappingType: t,
          referenceType: r
        };
      },
      parseMaterialIndices: function parseMaterialIndices(e) {
        var t = e.MappingInformationType,
            r = e.ReferenceInformationType;
        if ("NoMappingInformation" === t) return {
          dataSize: 1,
          buffer: [0],
          indices: [0],
          mappingType: "AllSame",
          referenceType: r
        };

        for (var n = e.Materials.a, a = [], i = 0; i < n.length; ++i) {
          a.push(i);
        }

        return {
          dataSize: 1,
          buffer: n,
          indices: a,
          mappingType: t,
          referenceType: r
        };
      },
      parseNurbsGeometry: function parseNurbsGeometry(e) {
        if (void 0 === THREE.NURBSCurve) return console.error("THREE.FBXLoader: The loader relies on THREE.NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."), new THREE.BufferGeometry();
        var t = parseInt(e.Order);
        if (isNaN(t)) return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", e.Order, e.id), new THREE.BufferGeometry();

        for (var r, n, a = t - 1, i = e.KnotVector.a, o = [], s = e.Points.a, u = 0, l = s.length; u < l; u += 4) {
          o.push(new THREE.Vector4().fromArray(s, u));
        }

        if ("Closed" === e.Form) o.push(o[0]);else if ("Periodic" === e.Form) {
          r = a, n = i.length - 1 - r;

          for (u = 0; u < a; ++u) {
            o.push(o[u]);
          }
        }
        var c = new THREE.NURBSCurve(a, i, o, r, n).getPoints(7 * o.length),
            p = new Float32Array(3 * c.length);
        c.forEach(function (e, t) {
          e.toArray(p, 3 * t);
        });
        var h = new THREE.BufferGeometry();
        return h.addAttribute("position", new THREE.BufferAttribute(p, 3)), h;
      }
    }, o.prototype = {
      constructor: o,
      parse: function parse() {
        var e = [],
            t = this.parseClips();
        if (void 0 !== t) for (var r in t) {
          var n = t[r],
              a = this.addClip(n);
          e.push(a);
        }
        return e;
      },
      parseClips: function parseClips() {
        if (void 0 !== e.Objects.AnimationCurve) {
          var t = this.parseAnimationCurveNodes();
          this.parseAnimationCurves(t);
          var r = this.parseAnimationLayers(t);
          return this.parseAnimStacks(r);
        }
      },
      parseAnimationCurveNodes: function parseAnimationCurveNodes() {
        var t = e.Objects.AnimationCurveNode,
            r = new Map();

        for (var n in t) {
          var a = t[n];

          if (null !== a.attrName.match(/S|R|T|DeformPercent/)) {
            var i = {
              id: a.id,
              attr: a.attrName,
              curves: {}
            };
            r.set(i.id, i);
          }
        }

        return r;
      },
      parseAnimationCurves: function parseAnimationCurves(r) {
        var n = e.Objects.AnimationCurve;

        for (var a in n) {
          var i = {
            id: n[a].id,
            times: n[a].KeyTime.a.map(h),
            values: n[a].KeyValueFloat.a
          },
              o = t.get(i.id);

          if (void 0 !== o) {
            var s = o.parents[0].ID,
                u = o.parents[0].relationship;
            u.match(/X/) ? r.get(s).curves.x = i : u.match(/Y/) ? r.get(s).curves.y = i : u.match(/Z/) ? r.get(s).curves.z = i : u.match(/d|DeformPercent/) && r.has(s) && (r.get(s).curves.morph = i);
          }
        }
      },
      parseAnimationLayers: function parseAnimationLayers(n) {
        var a = e.Objects.AnimationLayer,
            i = new Map();

        for (var o in a) {
          var s = [],
              u = t.get(parseInt(o));
          if (void 0 !== u) u.children.forEach(function (a, i) {
            if (n.has(a.ID)) {
              var o = n.get(a.ID);

              if (void 0 !== o.curves.x || void 0 !== o.curves.y || void 0 !== o.curves.z) {
                if (void 0 === s[i]) if (void 0 !== (f = t.get(a.ID).parents.filter(function (e) {
                  return void 0 !== e.relationship;
                })[0].ID)) {
                  var u = e.Objects.Model[f.toString()],
                      l = {
                    modelName: THREE.PropertyBinding.sanitizeNodeName(u.attrName),
                    ID: u.id,
                    initialPosition: [0, 0, 0],
                    initialRotation: [0, 0, 0],
                    initialScale: [1, 1, 1]
                  };
                  r.traverse(function (e) {
                    e.ID === u.id && (l.transform = e.matrix, e.userData.transformData && (l.eulerOrder = e.userData.transformData.eulerOrder));
                  }), l.transform || (l.transform = new THREE.Matrix4()), "PreRotation" in u && (l.preRotation = u.PreRotation.value), "PostRotation" in u && (l.postRotation = u.PostRotation.value), s[i] = l;
                }
                s[i] && (s[i][o.attr] = o);
              } else if (void 0 !== o.curves.morph) {
                if (void 0 === s[i]) {
                  var c = t.get(a.ID).parents.filter(function (e) {
                    return void 0 !== e.relationship;
                  })[0].ID,
                      p = t.get(c).parents[0].ID,
                      h = t.get(p).parents[0].ID,
                      f = t.get(h).parents[0].ID;
                  u = e.Objects.Model[f], l = {
                    modelName: THREE.PropertyBinding.sanitizeNodeName(u.attrName),
                    morphName: e.Objects.Deformer[c].attrName
                  };
                  s[i] = l;
                }

                s[i][o.attr] = o;
              }
            }
          }), i.set(parseInt(o), s);
        }

        return i;
      },
      parseAnimStacks: function parseAnimStacks(r) {
        var n = e.Objects.AnimationStack,
            a = {};

        for (var i in n) {
          var o = t.get(parseInt(i)).children;
          o.length > 1 && console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
          var s = r.get(o[0].ID);
          a[i] = {
            name: n[i].attrName,
            layer: s
          };
        }

        return a;
      },
      addClip: function addClip(e) {
        var t = [],
            r = this;
        return e.layer.forEach(function (e) {
          t = t.concat(r.generateTracks(e));
        }), new THREE.AnimationClip(e.name, -1, t);
      },
      generateTracks: function generateTracks(e) {
        var t = [],
            r = new THREE.Vector3(),
            n = new THREE.Quaternion(),
            a = new THREE.Vector3();

        if (e.transform && e.transform.decompose(r, n, a), r = r.toArray(), n = new THREE.Euler().setFromQuaternion(n, e.eulerOrder).toArray(), a = a.toArray(), void 0 !== e.T && Object.keys(e.T.curves).length > 0) {
          var i = this.generateVectorTrack(e.modelName, e.T.curves, r, "position");
          void 0 !== i && t.push(i);
        }

        if (void 0 !== e.R && Object.keys(e.R.curves).length > 0) {
          var o = this.generateRotationTrack(e.modelName, e.R.curves, n, e.preRotation, e.postRotation, e.eulerOrder);
          void 0 !== o && t.push(o);
        }

        if (void 0 !== e.S && Object.keys(e.S.curves).length > 0) {
          var s = this.generateVectorTrack(e.modelName, e.S.curves, a, "scale");
          void 0 !== s && t.push(s);
        }

        if (void 0 !== e.DeformPercent) {
          var u = this.generateMorphTrack(e);
          void 0 !== u && t.push(u);
        }

        return t;
      },
      generateVectorTrack: function generateVectorTrack(e, t, r, n) {
        var a = this.getTimesForAllAxes(t),
            i = this.getKeyframeTrackValues(a, t, r);
        return new THREE.VectorKeyframeTrack(e + "." + n, a, i);
      },
      generateRotationTrack: function generateRotationTrack(e, t, r, n, a, i) {
        void 0 !== t.x && (this.interpolateRotations(t.x), t.x.values = t.x.values.map(THREE.Math.degToRad)), void 0 !== t.y && (this.interpolateRotations(t.y), t.y.values = t.y.values.map(THREE.Math.degToRad)), void 0 !== t.z && (this.interpolateRotations(t.z), t.z.values = t.z.values.map(THREE.Math.degToRad));
        var o = this.getTimesForAllAxes(t),
            s = this.getKeyframeTrackValues(o, t, r);
        void 0 !== n && ((n = n.map(THREE.Math.degToRad)).push(i), n = new THREE.Euler().fromArray(n), n = new THREE.Quaternion().setFromEuler(n)), void 0 !== a && ((a = a.map(THREE.Math.degToRad)).push(i), a = new THREE.Euler().fromArray(a), a = new THREE.Quaternion().setFromEuler(a).inverse());

        for (var u = new THREE.Quaternion(), l = new THREE.Euler(), c = [], p = 0; p < s.length; p += 3) {
          l.set(s[p], s[p + 1], s[p + 2], i), u.setFromEuler(l), void 0 !== n && u.premultiply(n), void 0 !== a && u.multiply(a), u.toArray(c, p / 3 * 4);
        }

        return new THREE.QuaternionKeyframeTrack(e + ".quaternion", o, c);
      },
      generateMorphTrack: function generateMorphTrack(e) {
        var t = e.DeformPercent.curves.morph,
            n = t.values.map(function (e) {
          return e / 100;
        }),
            a = r.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
        return new THREE.NumberKeyframeTrack(e.modelName + ".morphTargetInfluences[" + a + "]", t.times, n);
      },
      getTimesForAllAxes: function getTimesForAllAxes(e) {
        var t = [];
        return void 0 !== e.x && (t = t.concat(e.x.times)), void 0 !== e.y && (t = t.concat(e.y.times)), void 0 !== e.z && (t = t.concat(e.z.times)), t = t.sort(function (e, t) {
          return e - t;
        }).filter(function (e, t, r) {
          return r.indexOf(e) == t;
        });
      },
      getKeyframeTrackValues: function getKeyframeTrackValues(e, t, r) {
        var n = r,
            a = [],
            i = -1,
            o = -1,
            s = -1;
        return e.forEach(function (e) {
          if (t.x && (i = t.x.times.indexOf(e)), t.y && (o = t.y.times.indexOf(e)), t.z && (s = t.z.times.indexOf(e)), -1 !== i) {
            var r = t.x.values[i];
            a.push(r), n[0] = r;
          } else a.push(n[0]);

          if (-1 !== o) {
            var u = t.y.values[o];
            a.push(u), n[1] = u;
          } else a.push(n[1]);

          if (-1 !== s) {
            var l = t.z.values[s];
            a.push(l), n[2] = l;
          } else a.push(n[2]);
        }), a;
      },
      interpolateRotations: function interpolateRotations(e) {
        for (var t = 1; t < e.values.length; t++) {
          var r = e.values[t - 1],
              n = e.values[t] - r,
              a = Math.abs(n);

          if (a >= 180) {
            for (var i = a / 180, o = n / i, s = r + o, u = e.times[t - 1], l = (e.times[t] - u) / i, c = u + l, p = [], h = []; c < e.times[t];) {
              p.push(c), c += l, h.push(s), s += o;
            }

            e.times = w(e.times, t, p), e.values = w(e.values, t, h);
          }
        }
      }
    }, s.prototype = {
      constructor: s,
      getPrevNode: function getPrevNode() {
        return this.nodeStack[this.currentIndent - 2];
      },
      getCurrentNode: function getCurrentNode() {
        return this.nodeStack[this.currentIndent - 1];
      },
      getCurrentProp: function getCurrentProp() {
        return this.currentProp;
      },
      pushStack: function pushStack(e) {
        this.nodeStack.push(e), this.currentIndent += 1;
      },
      popStack: function popStack() {
        this.nodeStack.pop(), this.currentIndent -= 1;
      },
      setCurrentProp: function setCurrentProp(e, t) {
        this.currentProp = e, this.currentPropName = t;
      },
      parse: function parse(e) {
        this.currentIndent = 0, this.allNodes = new c(), this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
        var t = this,
            r = e.split(/[\r\n]+/);
        return r.forEach(function (e, n) {
          var a = e.match(/^[\s\t]*;/),
              i = e.match(/^[\s\t]*$/);

          if (!a && !i) {
            var o = e.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", ""),
                s = e.match("^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"),
                u = e.match("^\\t{" + (t.currentIndent - 1) + "}}");
            o ? t.parseNodeBegin(e, o) : s ? t.parseNodeProperty(e, s, r[++n]) : u ? t.popStack() : e.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(e);
          }
        }), this.allNodes;
      },
      parseNodeBegin: function parseNodeBegin(e, t) {
        var r = t[1].trim().replace(/^"/, "").replace(/"$/, ""),
            n = t[2].split(",").map(function (e) {
          return e.trim().replace(/^"/, "").replace(/"$/, "");
        }),
            a = {
          name: r
        },
            i = this.parseNodeAttr(n),
            o = this.getCurrentNode();
        0 === this.currentIndent ? this.allNodes.add(r, a) : r in o ? ("PoseNode" === r ? o.PoseNode.push(a) : void 0 !== o[r].id && (o[r] = {}, o[r][o[r].id] = o[r]), "" !== i.id && (o[r][i.id] = a)) : "number" == typeof i.id ? (o[r] = {}, o[r][i.id] = a) : "Properties70" !== r && (o[r] = "PoseNode" === r ? [a] : a), "number" == typeof i.id && (a.id = i.id), "" !== i.name && (a.attrName = i.name), "" !== i.type && (a.attrType = i.type), this.pushStack(a);
      },
      parseNodeAttr: function parseNodeAttr(e) {
        var t = e[0];
        "" !== e[0] && (t = parseInt(e[0]), isNaN(t) && (t = e[0]));
        var r = "",
            n = "";
        return e.length > 1 && (r = e[1].replace(/^(\w+)::/, ""), n = e[2]), {
          id: t,
          name: r,
          type: n
        };
      },
      parseNodeProperty: function parseNodeProperty(e, t, r) {
        var n = t[1].replace(/^"/, "").replace(/"$/, "").trim(),
            a = t[2].replace(/^"/, "").replace(/"$/, "").trim();
        "Content" === n && "," === a && (a = r.replace(/"/g, "").replace(/,$/, "").trim());
        var i = this.getCurrentNode();

        if ("Properties70" !== i.name) {
          if ("C" === n) {
            var o = a.split(",").slice(1),
                s = parseInt(o[0]),
                u = parseInt(o[1]),
                l = a.split(",").slice(3);
            n = "connections", function (e, t) {
              for (var r = 0, n = e.length, a = t.length; r < a; r++, n++) {
                e[n] = t[r];
              }
            }(a = [s, u], l = l.map(function (e) {
              return e.trim().replace(/^"/, "");
            })), void 0 === i[n] && (i[n] = []);
          }

          "Node" === n && (i.id = a), n in i && Array.isArray(i[n]) ? i[n].push(a) : "a" !== n ? i[n] = a : i.a = a, this.setCurrentProp(i, n), "a" === n && "," !== a.slice(-1) && (i.a = y(a));
        } else this.parseNodeSpecialProperty(e, n, a);
      },
      parseNodePropertyContinued: function parseNodePropertyContinued(e) {
        var t = this.getCurrentNode();
        t.a += e, "," !== e.slice(-1) && (t.a = y(t.a));
      },
      parseNodeSpecialProperty: function parseNodeSpecialProperty(e, t, r) {
        var n = r.split('",').map(function (e) {
          return e.trim().replace(/^\"/, "").replace(/\s/, "_");
        }),
            a = n[0],
            i = n[1],
            o = n[2],
            s = n[3],
            u = n[4];

        switch (i) {
          case "int":
          case "enum":
          case "bool":
          case "ULongLong":
          case "double":
          case "Number":
          case "FieldOfView":
            u = parseFloat(u);
            break;

          case "Color":
          case "ColorRGB":
          case "Vector3D":
          case "Lcl_Translation":
          case "Lcl_Rotation":
          case "Lcl_Scaling":
            u = y(u);
        }

        this.getPrevNode()[a] = {
          type: i,
          type2: o,
          flag: s,
          value: u
        }, this.setCurrentProp(this.getPrevNode(), a);
      }
    }, u.prototype = {
      constructor: u,
      parse: function parse(e) {
        var t = new l(e);
        t.skip(23);
        var r = t.getUint32();
        console.log("THREE.FBXLoader: FBX binary version: " + r);

        for (var n = new c(); !this.endOfContent(t);) {
          var a = this.parseNode(t, r);
          null !== a && n.add(a.name, a);
        }

        return n;
      },
      endOfContent: function endOfContent(e) {
        return e.size() % 16 == 0 ? (e.getOffset() + 160 + 16 & -16) >= e.size() : e.getOffset() + 160 + 16 >= e.size();
      },
      parseNode: function parseNode(e, t) {
        var r = {},
            n = t >= 7500 ? e.getUint64() : e.getUint32(),
            a = t >= 7500 ? e.getUint64() : e.getUint32(),
            i = (t >= 7500 ? e.getUint64() : e.getUint32(), e.getUint8()),
            o = e.getString(i);
        if (0 === n) return null;

        for (var s = [], u = 0; u < a; u++) {
          s.push(this.parseProperty(e));
        }

        var l = s.length > 0 ? s[0] : "",
            c = s.length > 1 ? s[1] : "",
            p = s.length > 2 ? s[2] : "";

        for (r.singleProperty = 1 === a && e.getOffset() === n; n > e.getOffset();) {
          var h = this.parseNode(e, t);
          null !== h && this.parseSubNode(o, r, h);
        }

        return r.propertyList = s, "number" == typeof l && (r.id = l), "" !== c && (r.attrName = c), "" !== p && (r.attrType = p), "" !== o && (r.name = o), r;
      },
      parseSubNode: function parseSubNode(e, t, r) {
        if (!0 === r.singleProperty) {
          var n = r.propertyList[0];
          Array.isArray(n) ? (t[r.name] = r, r.a = n) : t[r.name] = n;
        } else if ("Connections" === e && "C" === r.name) {
          var a = [];
          r.propertyList.forEach(function (e, t) {
            0 !== t && a.push(e);
          }), void 0 === t.connections && (t.connections = []), t.connections.push(a);
        } else if ("Properties70" === r.name) {
          Object.keys(r).forEach(function (e) {
            t[e] = r[e];
          });
        } else if ("Properties70" === e && "P" === r.name) {
          var i,
              o = r.propertyList[0],
              s = r.propertyList[1],
              u = r.propertyList[2],
              l = r.propertyList[3];
          0 === o.indexOf("Lcl ") && (o = o.replace("Lcl ", "Lcl_")), 0 === s.indexOf("Lcl ") && (s = s.replace("Lcl ", "Lcl_")), i = "Color" === s || "ColorRGB" === s || "Vector" === s || "Vector3D" === s || 0 === s.indexOf("Lcl_") ? [r.propertyList[4], r.propertyList[5], r.propertyList[6]] : r.propertyList[4], t[o] = {
            type: s,
            type2: u,
            flag: l,
            value: i
          };
        } else void 0 === t[r.name] ? "number" == typeof r.id ? (t[r.name] = {}, t[r.name][r.id] = r) : t[r.name] = r : "PoseNode" === r.name ? (Array.isArray(t[r.name]) || (t[r.name] = [t[r.name]]), t[r.name].push(r)) : void 0 === t[r.name][r.id] && (t[r.name][r.id] = r);
      },
      parseProperty: function parseProperty(e) {
        var t = e.getString(1);

        switch (t) {
          case "C":
            return e.getBoolean();

          case "D":
            return e.getFloat64();

          case "F":
            return e.getFloat32();

          case "I":
            return e.getInt32();

          case "L":
            return e.getInt64();

          case "R":
            var r = e.getUint32();
            return e.getArrayBuffer(r);

          case "S":
            r = e.getUint32();
            return e.getString(r);

          case "Y":
            return e.getInt16();

          case "b":
          case "c":
          case "d":
          case "f":
          case "i":
          case "l":
            var n = e.getUint32(),
                a = e.getUint32(),
                i = e.getUint32();
            if (0 === a) switch (t) {
              case "b":
              case "c":
                return e.getBooleanArray(n);

              case "d":
                return e.getFloat64Array(n);

              case "f":
                return e.getFloat32Array(n);

              case "i":
                return e.getInt32Array(n);

              case "l":
                return e.getInt64Array(n);
            }
            "undefined" == typeof Zlib && console.error("THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js");
            var o = new l(new Zlib.Inflate(new Uint8Array(e.getArrayBuffer(i))).decompress().buffer);

            switch (t) {
              case "b":
              case "c":
                return o.getBooleanArray(n);

              case "d":
                return o.getFloat64Array(n);

              case "f":
                return o.getFloat32Array(n);

              case "i":
                return o.getInt32Array(n);

              case "l":
                return o.getInt64Array(n);
            }

          default:
            throw new Error("THREE.FBXLoader: Unknown property type " + t);
        }
      }
    }, l.prototype = {
      constructor: l,
      getOffset: function getOffset() {
        return this.offset;
      },
      size: function size() {
        return this.dv.buffer.byteLength;
      },
      skip: function skip(e) {
        this.offset += e;
      },
      getBoolean: function getBoolean() {
        return 1 == (1 & this.getUint8());
      },
      getBooleanArray: function getBooleanArray(e) {
        for (var t = [], r = 0; r < e; r++) {
          t.push(this.getBoolean());
        }

        return t;
      },
      getUint8: function getUint8() {
        var e = this.dv.getUint8(this.offset);
        return this.offset += 1, e;
      },
      getInt16: function getInt16() {
        var e = this.dv.getInt16(this.offset, this.littleEndian);
        return this.offset += 2, e;
      },
      getInt32: function getInt32() {
        var e = this.dv.getInt32(this.offset, this.littleEndian);
        return this.offset += 4, e;
      },
      getInt32Array: function getInt32Array(e) {
        for (var t = [], r = 0; r < e; r++) {
          t.push(this.getInt32());
        }

        return t;
      },
      getUint32: function getUint32() {
        var e = this.dv.getUint32(this.offset, this.littleEndian);
        return this.offset += 4, e;
      },
      getInt64: function getInt64() {
        var e, t;
        return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), 2147483648 & t ? (t = 4294967295 & ~t, 4294967295 === (e = 4294967295 & ~e) && (t = t + 1 & 4294967295), -(4294967296 * t + (e = e + 1 & 4294967295))) : 4294967296 * t + e;
      },
      getInt64Array: function getInt64Array(e) {
        for (var t = [], r = 0; r < e; r++) {
          t.push(this.getInt64());
        }

        return t;
      },
      getUint64: function getUint64() {
        var e, t;
        return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), 4294967296 * t + e;
      },
      getFloat32: function getFloat32() {
        var e = this.dv.getFloat32(this.offset, this.littleEndian);
        return this.offset += 4, e;
      },
      getFloat32Array: function getFloat32Array(e) {
        for (var t = [], r = 0; r < e; r++) {
          t.push(this.getFloat32());
        }

        return t;
      },
      getFloat64: function getFloat64() {
        var e = this.dv.getFloat64(this.offset, this.littleEndian);
        return this.offset += 8, e;
      },
      getFloat64Array: function getFloat64Array(e) {
        for (var t = [], r = 0; r < e; r++) {
          t.push(this.getFloat64());
        }

        return t;
      },
      getArrayBuffer: function getArrayBuffer(e) {
        var t = this.dv.buffer.slice(this.offset, this.offset + e);
        return this.offset += e, t;
      },
      getString: function getString(e) {
        for (var t = [], r = 0; r < e; r++) {
          t[r] = this.getUint8();
        }

        var n = t.indexOf(0);
        return n >= 0 && (t = t.slice(0, n)), THREE.LoaderUtils.decodeText(new Uint8Array(t));
      }
    }, c.prototype = {
      constructor: c,
      add: function add(e, t) {
        this[e] = t;
      }
    };
    var f = [];

    function d(e, t, r, n) {
      var a;

      switch (n.mappingType) {
        case "ByPolygonVertex":
          a = e;
          break;

        case "ByPolygon":
          a = t;
          break;

        case "ByVertice":
          a = r;
          break;

        case "AllSame":
          a = n.indices[0];
          break;

        default:
          console.warn("THREE.FBXLoader: unknown attribute mapping type " + n.mappingType);
      }

      "IndexToDirect" === n.referenceType && (a = n.indices[a]);
      var i = a * n.dataSize,
          o = i + n.dataSize;
      return function (e, t, r, n) {
        for (var a = r, i = 0; a < n; a++, i++) {
          e[i] = t[a];
        }

        return e;
      }(f, n.buffer, i, o);
    }

    var v = new THREE.Euler(),
        m = new THREE.Vector3();

    function g(e) {
      var t,
          r = new THREE.Matrix4(),
          n = new THREE.Matrix4(),
          a = new THREE.Matrix4(),
          i = new THREE.Matrix4(),
          o = new THREE.Matrix4(),
          s = new THREE.Matrix4(),
          u = new THREE.Matrix4(),
          l = new THREE.Matrix4(),
          c = new THREE.Matrix4(),
          p = new THREE.Matrix4(),
          h = new THREE.Matrix4(),
          f = e.inheritType ? e.inheritType : 0;
      (e.translation && r.setPosition(m.fromArray(e.translation)), e.preRotation) && ((t = e.preRotation.map(THREE.Math.degToRad)).push(e.eulerOrder), n.makeRotationFromEuler(v.fromArray(t)));
      e.rotation && ((t = e.rotation.map(THREE.Math.degToRad)).push(e.eulerOrder), a.makeRotationFromEuler(v.fromArray(t)));
      e.postRotation && ((t = e.postRotation.map(THREE.Math.degToRad)).push(e.eulerOrder), i.makeRotationFromEuler(v.fromArray(t)));
      e.scale && o.scale(m.fromArray(e.scale)), e.scalingOffset && u.setPosition(m.fromArray(e.scalingOffset)), e.scalingPivot && s.setPosition(m.fromArray(e.scalingPivot)), e.rotationOffset && l.setPosition(m.fromArray(e.rotationOffset)), e.rotationPivot && c.setPosition(m.fromArray(e.rotationPivot)), e.parentMatrixWorld && (p = e.parentMatrixWorld);
      var d = n.multiply(a).multiply(i),
          g = new THREE.Matrix4();
      p.extractRotation(g);
      var E,
          y,
          T,
          w,
          R = new THREE.Matrix4();
      if (R.copyPosition(p), T = R.getInverse(R).multiply(p), y = g.getInverse(g).multiply(T), E = o, 0 === f) w = g.multiply(d).multiply(y).multiply(E);else if (1 === f) w = g.multiply(y).multiply(d).multiply(E);else {
        var b = new THREE.Matrix4().copy(o),
            I = y.multiply(b.getInverse(b));
        w = g.multiply(d).multiply(I).multiply(E);
      }
      var x = r.multiply(l).multiply(c).multiply(n).multiply(a).multiply(i).multiply(c.getInverse(c)).multiply(u).multiply(s).multiply(o).multiply(s.getInverse(s)),
          H = new THREE.Matrix4().copyPosition(x),
          A = p.multiply(H);
      return h.copyPosition(A), x = h.multiply(w);
    }

    function E(e) {
      var t = ["ZYX", "YZX", "XZY", "ZXY", "YXZ", "XYZ"];
      return 6 === (e = e || 0) ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), t[0]) : t[e];
    }

    function y(e) {
      return e.split(",").map(function (e) {
        return parseFloat(e);
      });
    }

    function T(e, t, r) {
      return void 0 === t && (t = 0), void 0 === r && (r = e.byteLength), THREE.LoaderUtils.decodeText(new Uint8Array(e, t, r));
    }

    function w(e, t, r) {
      return e.slice(0, t).concat(r).concat(e.slice(t));
    }

    return n;
  }();
}]);