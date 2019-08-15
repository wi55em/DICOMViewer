(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        217: function (e, t, n) { },
        250: function (e, t, n) {
            e.exports = n(549)
        },
        495: function (e, t, n) { },
        497: function (e, t, n) { },
        498: function (e, t, n) { },
        499: function (e, t, n) { },
        500: function (e, t, n) { },
        501: function (e, t, n) { },
        502: function (e, t, n) { },
        503: function (e, t, n) { },
        504: function (e, t, n) { },
        505: function (e, t, n) { },
        506: function (e, t, n) { },
        507: function (e, t, n) { },
        539: function (e, t, n) { },
        542: function (e, t, n) { },
        543: function (e, t, n) { },
        544: function (e, t, n) { },
        545: function (e, t, n) { },
        549: function (e, t, n) {
            "use strict";
            n.r(t);
            n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), n(275), n(276), n(277), n(118), n(278), n(279), n(280), n(281), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(296), n(298), n(299), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(329), n(330), n(331), n(332), n(333), n(334), n(335), n(336), n(337), n(338), n(339), n(340), n(341), n(342), n(343), n(344), n(345), n(346), n(347), n(348), n(349), n(350), n(351), n(352), n(353), n(354), n(355), n(356), n(357), n(358), n(359), n(360), n(362), n(363), n(364), n(365), n(368), n(369), n(370), n(372), n(373), n(374), n(375), n(376), n(377), n(378), n(379), n(380), n(381), n(382), n(383), n(384), n(385), n(386), n(387), n(388), n(389), n(390), n(391), n(200), n(392), n(393), n(394), n(395), n(396), n(397), n(398), n(399), n(400), n(401), n(402), n(403), n(404), n(405), n(406), n(407), n(408), n(409), n(410), n(411), n(412), n(413), n(414), n(415), n(416), n(417), n(418), n(419), n(420), n(421), n(422), n(423), n(424), n(425), n(426), n(427), n(428), n(429), n(430), n(431), n(432), n(433), n(434), n(435), n(436), n(437), n(438), n(439), n(440), n(441), n(442), n(443), n(444), n(445), n(446), n(447), n(448), n(449), n(450), n(451), n(452), n(453), n(454), n(455), n(456), n(457), n(460), n(207);
            var a, r = n(4),
                o = n(5),
                i = n(10),
                s = n(9),
                c = n(11),
                l = n(6),
                u = n(3),
                p = n.n(u),
                d = n(35),
                m = n.n(d),
                f = n(69),
                h = n.n(f),
                v = window.process;
            v && v.env && v.env.PUBLIC_URL && (a = v.env.PUBLIC_URL), window.info = {
                version: "0.0.21",
                homepage: a
            }, window.cornerstone = p.a, window.cornerstoneWADOImageLoader = m.a, m.a.external.cornerstone = p.a, m.a.external.dicomParser = h.a, l.default.user.getAccessToken = function () {
                var e = window.store.getState();
                if (e.oidc && e.oidc.user) return e.oidc.user.access_token
            }, m.a.configure({
                beforeSend: function (e) {
                    var t = l.default.DICOMWeb.getAuthorizationHeader();
                    t.Authorization && e.setRequestHeader("Authorization", t.Authorization)
                }
            });
            n(211);
            var b = n(1),
                g = n.n(b),
                y = n(51),
                E = n(56),
                S = n(109),
                O = function (e, t) {
                    if (e && t) {
                        var n = new S.WebStorageStateStore({
                            store: new S.InMemoryWebStorage
                        }),
                            a = Object(y.a)({}, t, {
                                automaticSilentRenew: !0,
                                revokeAccessTokenOnSignout: !0,
                                filterProtocolClaims: !0,
                                loadUserInfo: !0,
                                userStore: n
                            }),
                            r = Object(E.createUserManager)(a);
                        return Object(E.loadUser)(e, r), r
                    }
                };
            var w = n(17),
                k = n(229),
                D = n.n(k),
                j = n(163),
                C = n.n(j),
                I = n(7),
                T = n.n(I),
                x = n(92),
                M = {
                    labelling: {},
                    contextMenu: {}
                },
                L = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "SET_LABELLING_FLOW_DATA":
                            var n = Object.assign({}, t.labellingFlowData);
                            return Object.assign({}, e, {
                                labelling: n
                            });
                        case "SET_TOOL_CONTEXT_MENU_DATA":
                            var a = Object.assign({}, e.contextMenu);
                            return a[t.viewportIndex] = Object.assign({}, t.toolContextMenuData), Object.assign({}, e, {
                                contextMenu: a
                            });
                        case "RESET_LABELLING_AND_CONTEXT_MENU":
                            return Object.assign({}, e, {
                                labelling: M.labelling,
                                contextMenu: M.contextMenu
                            });
                        default:
                            return e
                    }
                },
                N = n(230),
                P = l.redux.reducers,
                A = l.redux.localStorage;
            P.ui = L, P.oidc = E.reducer;
            var U = Object(x.c)(P),
                R = Object(x.d)(U, A.loadState(), Object(x.a)(N.a));
            R.subscribe(function () {
                A.saveState({
                    preferences: R.getState().preferences
                })
            });
            var F = R,
                B = l.redux.actions.setViewportActive,
                V = {
                    updateViewportDisplaySet: function (e) {
                        e.direction
                    },
                    updateActiveViewport: function (e) {
                        var t = e.viewports,
                            n = e.direction,
                            a = t.viewportSpecificData,
                            r = t.activeViewportIndex,
                            o = Object.keys(a).length - 1,
                            i = r + n;
                        i = (i = i > o ? 0 : i) < 0 ? o : i, F.dispatch(B(i))
                    }
                },
                H = {
                    definitions: {
                        incrementActiveViewport: {
                            commandFn: V.updateActiveViewport,
                            storeContexts: ["viewports"],
                            options: {
                                direction: 1
                            }
                        },
                        decrementActiveViewport: {
                            commandFn: V.updateActiveViewport,
                            storeContexts: ["viewports"],
                            options: {
                                direction: -1
                            }
                        }
                    },
                    defaultContext: "VIEWER"
                },
                _ = {
                    id: "generic-viewer-commands",
                    getCommandsModule: function () {
                        return H
                    }
                },
                W = n(14),
                Y = n(16),
                z = n(64),
                G = n.n(z),
                q = l.measurements.MeasurementApi,
                J = l.utils.studyMetadataManager;

            function X(e) {
                var t = e.toolType,
                    n = e.measurementNumber,
                    a = e.location,
                    r = e.description,
                    o = l.default.measurements.MeasurementApi.Instance;
                o.tools[t].filter(function (e) {
                    return e.measurementNumber === n
                }).forEach(function (e) {
                    e.location = a, e.description = r, o.updateMeasurement(e.toolType, e)
                }), o.syncMeasurementsAndToolData(), p.a.getEnabledElements().forEach(function (e) {
                    p.a.updateImage(e.element)
                })
            }

            function K(e, t, n) {
                var a = t.toolType,
                    r = e.element,
                    o = X,
                    i = T.a.getToolForElement(r, a);
                i && i.configuration && i.configuration.getMeasurementLocationCallback ? i.configuration.getMeasurementLocationCallback(t, e, o, n) : console.warn("Tool instance configuration is missing: getMeasurementLocationCallback")
            }
            var Q = l.default.redux.actions.setViewportSpecificData,
                Z = l.default.measurements.MeasurementApi;

            function $(e) {
                var t = e.location,
                    n = e.description,
                    a = "...";
                return t && (a = t, n && (a += "(".concat(n, ")"))), a
            }

            function ee(e, t, n) {
                var a = [];
                return e.forEach(function (e) {
                    t.forEach(function (t) {
                        var r = {
                            displayText: "..."
                        };
                        e.timepointId === t.timepointId && (r.displayText = n(e)), a.push(r)
                    })
                }), a
            }

            function te(e, t) {
                var n = l.default.measurements.MeasurementApi.getConfiguration().measurementTools,
                    a = function () {
                        var e = l.default.measurements.MeasurementApi.getConfiguration(),
                            t = [];
                        return e.measurementTools.forEach(function (e) {
                            return t = t.concat(e.childTools)
                        }), t
                    }(),
                    r = n.map(function (e) {
                        return {
                            groupName: e.name,
                            groupId: e.id,
                            measurements: []
                        }
                    });
                return Object.keys(e).forEach(function (n) {
                    var o, i = e[n],
                        s = a.find(function (e) {
                            return e.id === n
                        }),
                        c = s.options.measurementTable.displayFunction,
                        l = (o = "measurementNumber", i.reduce(function (e, t) {
                            return (e[t[o]] = e[t[o]] || []).push(t), e
                        }, {}));
                    Object.keys(l).forEach(function (e) {
                        var n = l[e],
                            a = n[0],
                            o = a.measurementNumber,
                            i = a.lesionNamingNumber,
                            u = a.toolType,
                            p = a._id,
                            d = {
                                itemNumber: i,
                                label: $(a),
                                measurementId: p,
                                measurementNumber: o,
                                lesionNamingNumber: i,
                                toolType: u,
                                hasWarnings: !1,
                                warningTitle: "",
                                isSplitLesion: !1,
                                warningList: [],
                                data: ee(n, t, c)
                            };
                        r.find(function (e) {
                            return e.groupId === s.toolGroup
                        }).measurements.push(d)
                    })
                }), r.forEach(function (e) {
                    e.measurements.sort(function (e, t) {
                        return e.lesionNamingNumber > t.lesionNamingNumber ? 1 : -1
                    })
                }), r
            }

            function ne(e) {
                return e && e.length ? [{
                    label: "Study date:",
                    key: "StudyDate",
                    date: G()(e[0].latestDate).format("DD-MMM-YY")
                }] : []
            }
            var ae = Object(W.connect)(function (e) {
                var t = e.timepointManager,
                    n = t.timepoints,
                    a = t.measurements;
                return {
                    timepoints: ne(n),
                    measurementCollection: te(a, n),
                    timepointManager: e.timepointManager,
                    viewports: e.viewports
                }
            }, function (e) {
                return {
                    dispatchRelabel: function (e, t, n) {
                        var a = n && n.activeViewportIndex || 0,
                            r = p.a.getEnabledElements();
                        if (!r || r.length <= a) l.default.log.error("Failed to find the enabled element");
                        else {
                            var o = r[a].element,
                                i = {
                                    event: {
                                        clientX: e.clientX,
                                        clientY: e.clientY
                                    },
                                    element: o
                                },
                                s = t.toolType,
                                c = t.measurementId,
                                u = Z.Instance.tools[s].find(function (e) {
                                    return e._id === c
                                });
                            K(i, Object.assign({}, u, {
                                location: null
                            }), {
                                    skipAddLabelButton: !0,
                                    editLocation: !0
                                })
                        }
                    },
                    dispatchEditDescription: function (e, t, n) {
                        var a = n && n.activeViewportIndex || 0,
                            r = p.a.getEnabledElements();
                        if (!r || r.length <= a) l.default.log.error("Failed to find the enabled element");
                        else {
                            var o = r[a].element,
                                i = {
                                    event: {
                                        clientX: e.clientX,
                                        clientY: e.clientY
                                    },
                                    element: o
                                },
                                s = t.toolType,
                                c = t.measurementId;
                            K(i, Z.Instance.tools[s].find(function (e) {
                                return e._id === c
                            }), {
                                    editDescriptionOnDialog: !0
                                })
                        }
                    },
                    dispatchJumpToRowItem: function (t, n, a, r) {
                        (function (e, t, n) {
                            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                invertViewportTimepointsOrder: !1,
                                childToolKey: null
                            },
                                r = t.layout.viewports.length,
                                o = n.timepoints.length,
                                i = n.measurements,
                                s = n.timepoints,
                                c = Math.min(o, r),
                                l = e.toolType,
                                u = e.measurementNumber;
                            a.invertViewportTimepointsOrder && s.reverse();
                            for (var p = i[l], d = [], m = function (e) {
                                var t = s[e].timepointId,
                                    n = p.find(function (e) {
                                        return e.timepointId === t && e.measurementNumber === u
                                    });
                                if (!n) return d.push(null), "continue";
                                var r = n,
                                    o = q.getToolConfiguration(l).tool;
                                if (a.childToolKey) r = n[a.childToolKey];
                                else if (Array.isArray(o.childTools)) {
                                    var i = o.childTools.find(function (e) {
                                        return !!n[e]
                                    });
                                    r = n[i]
                                }
                                d.push(r)
                            }, f = 0; f < c; f++) m(f);
                            var h = [];
                            return d.forEach(function (e, t) {
                                if (e) {
                                    var n = J.get(e.studyInstanceUid);
                                    if (!n) throw new Error("Study not found.");
                                    var a = n.findDisplaySet(function (t) {
                                        return function (e, t) {
                                            return e.images.find(function (e) {
                                                return e.getSOPInstanceUID() === t
                                            })
                                        }(t, e.sopInstanceUid)
                                    });
                                    if (!a) throw new Error("Display set not found.");
                                    a.sopInstanceUid = e.sopInstanceUid, e.frameIndex && (a.frameIndex = e.frameIndex), h.push({
                                        viewportIndex: t,
                                        displaySet: a
                                    })
                                }
                            }), {
                                    viewportSpecificData: h,
                                    layout: []
                                }
                        })(t, n, a, e, r).viewportSpecificData.forEach(function (t) {
                            var n = t.viewportIndex,
                                a = t.displaySet;
                            e(Q(n, a))
                        });
                        var o = t.toolType,
                            i = t.measurementNumber,
                            s = Z.Instance;
                        Object.keys(s.tools).forEach(function (e) {
                            s.tools[e].forEach(function (e) {
                                e.active = !1
                            })
                        }), s.tools[o].filter(function (e) {
                            return e.measurementNumber === i
                        }).forEach(function (e) {
                            e.active = !0
                        }), s.syncMeasurementsAndToolData(), p.a.getEnabledElements().forEach(function (e) {
                            p.a.updateImage(e.element)
                        })
                    }
                }
            }, function (e, t, n) {
                return Object(y.a)({
                    timepoints: e.timepoints,
                    measurementCollection: e.measurementCollection,
                    selectedMeasurementNumber: n.selectedMeasurementNumber
                }, t, {
                        onItemClick: function (n, a) {
                            var r = e.viewports,
                                o = e.timepointManager;
                            t.dispatchJumpToRowItem(a, r, o, {
                                invertViewportTimepointsOrder: !1,
                                childToolKey: null
                            })
                        },
                        onRelabelClick: function (n, a) {
                            var r = e.viewports;
                            t.dispatchRelabel(n, a, r)
                        },
                        onEditDescriptionClick: function (n, a) {
                            var r = e.viewports;
                            t.dispatchEditDescription(n, a, r)
                        },
                        onDeleteClick: function (e, t) {
                            l.default.measurements.MeasurementHandlers.onRemoved({
                                detail: {
                                    toolType: t.toolType,
                                    measurementData: {
                                        _id: t.measurementId,
                                        lesionNamingNumber: t.lesionNamingNumber,
                                        measurementNumber: t.measurementNumber
                                    }
                                }
                            })
                        }
                    })
            })(Y.h),
                re = {
                    id: "measurements-table",
                    getPanelModule: function () {
                        return {
                            menuOptions: [{
                                icon: "list",
                                label: "Measurements",
                                target: "measurement-panel"
                            }],
                            components: [{
                                id: "measurement-panel",
                                component: ae
                            }],
                            defaultContext: ["VIEWER"]
                        }
                    }
                },
                oe = n(232),
                ie = n(235),
                se = n(236),
                ce = n(237),
                le = n(57),
                ue = n(238),
                pe = n(550),
                de = n(132),
                me = n.n(de),
                fe = n(13),
                he = n.n(fe),
                ve = n(26),
                be = n(62),
                ge = n.n(be);
            n(495);
            var ye = function () {
                return g.a.createElement("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "header-brand",
                    href: "http://ohif.org"
                }, g.a.createElement(Y.e, {
                    name: "ohif-logo",
                    className: "header-logo-image"
                }), g.a.createElement("div", {
                    className: "header-logo-text"
                }, "Open Health Imaging Foundation"))
            },
                Ee = {
                    logoComponent: ye()
                },
                Se = g.a.createContext(Ee),
                Oe = (n(217), n(44)),
                we = function (e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), (n = Object(i.a)(this, Object(s.a)(t).call(this, e))).state = {
                            isUserPreferencesOpen: !1,
                            isOpen: !1
                        }, n.loadOptions(), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "loadOptions",
                        value: function () {
                            var e = this,
                                t = this.props.t;
                            this.options = [{
                                title: t("About"),
                                icon: {
                                    name: "info"
                                },
                                onClick: function () {
                                    e.setState({
                                        isOpen: !0
                                    })
                                }
                            }], this.props.user && this.props.userManager && this.options.push({
                                title: t("Logout"),
                                icon: {
                                    name: "power-off"
                                },
                                onClick: function () {
                                    e.props.userManager.signoutRedirect()
                                }
                            }), this.hotKeysData = ta.hotkeyDefinitions
                        }
                    }, {
                        key: "onUserPreferencesSave",
                        value: function (e) {
                            e.windowLevelData, e.hotKeysData
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.props.t,
                                n = void 0 === window.config.showStudyList || window.config.showStudyList;
                            return g.a.createElement("div", {
                                className: "entry-header ".concat(this.props.home ? "header-big" : "")
                            }, g.a.createElement("div", {
                                className: "header-left-box"
                            }, this.props.location && this.props.location.studyLink && g.a.createElement(Oe.b, {
                                to: this.props.location.studyLink,
                                className: "header-btn header-viewerLink"
                            }, t("Back to Viewer")), this.props.children, n && !this.props.home && g.a.createElement(Oe.b, {
                                className: "header-btn header-studyListLinkSection",
                                to: {
                                    pathname: "/",
                                    state: {
                                        studyLink: this.props.location.pathname
                                    }
                                }
                            }, t("Study list"))), g.a.createElement("div", {
                                className: "header-menu"
                            }, g.a.createElement("span", {
                                className: "research-use"
                            }, t("INVESTIGATIONAL USE ONLY")), g.a.createElement(Y.c, {
                                title: t("Options"),
                                list: this.options,
                                align: "right"
                            }), g.a.createElement(Y.a, Object.assign({}, this.state, {
                                onCancel: function () {
                                    return e.setState({
                                        isOpen: !1
                                    })
                                }
                            }))))
                        }
                    }]), t
                }(b.Component);
            we.defaultProps = {
                home: !0,
                children: ye()
            };
            var ke = Object(w.c)("Header")(Object(le.f)(we)),
                De = Object(W.connect)(function (e) {
                    return {
                        user: e.oidc && e.oidc.user,
                        isOpen: e.ui.userPreferencesModalOpen
                    }
                })(ke),
                je = n(68),
                Ce = (n(497), n(63)),
                Ie = n.n(Ce),
                Te = (0, T.a.import)("util/scrollToIndex"),
                xe = l.default.redux.actions.setViewportSpecificData,
                Me = Object(W.connect)(function (e) {
                    var t = e.viewports,
                        n = t.viewportSpecificData[t.activeViewportIndex] || {},
                        a = n.cine;
                    return {
                        activeEnabledElement: n.dom,
                        activeViewportCineData: a || {
                            isPlaying: !1,
                            cineFrameRate: 24
                        },
                        activeViewportIndex: e.viewports.activeViewportIndex
                    }
                }, function (e) {
                    return {
                        dispatchSetViewportSpecificData: function (t, n) {
                            e(xe(t, n))
                        }
                    }
                }, function (e, t, n) {
                    var a = e.activeEnabledElement,
                        r = e.activeViewportCineData,
                        o = e.activeViewportIndex;
                    return {
                        cineFrameRate: r.cineFrameRate,
                        isPlaying: r.isPlaying,
                        onPlayPauseChanged: function (e) {
                            var n = Ie()(r);
                            n.isPlaying = !n.isPlaying, t.dispatchSetViewportSpecificData(o, {
                                cine: n
                            })
                        },
                        onFrameRateChanged: function (e) {
                            var n = Ie()(r);
                            n.cineFrameRate = e, t.dispatchSetViewportSpecificData(o, {
                                cine: n
                            })
                        },
                        onClickNextButton: function () {
                            var e = T.a.getToolState(a, "stack");
                            if (e && e.data && e.data.length) {
                                var t = e.data[0],
                                    n = t.currentImageIdIndex;
                                n >= t.imageIds.length - 1 || Te(a, n + 1)
                            }
                        },
                        onClickBackButton: function () {
                            var e = T.a.getToolState(a, "stack");
                            if (e && e.data && e.data.length) {
                                var t = e.data[0].currentImageIdIndex;
                                0 !== t && Te(a, t - 1)
                            }
                        },
                        onClickSkipToStart: function () {
                            var e = T.a.getToolState(a, "stack");
                            e && e.data && e.data.length && Te(a, 0)
                        },
                        onClickSkipToEnd: function () {
                            var e = T.a.getToolState(a, "stack");
                            if (e && e.data && e.data.length) {
                                var t = e.data[0].imageIds.length - 1;
                                Te(a, t)
                            }
                        }
                    }
                })(Y.b),
                Le = l.default.redux.actions.setLayout,
                Ne = Object(W.connect)(function (e) {
                    return {
                        currentLayout: e.viewports.layout
                    }
                }, function (e) {
                    return {
                        onChange: function (t) {
                            for (var n = [], a = t.row + 1, r = t.col + 1, o = a * r, i = 0; i < o; i++) n.push({
                                height: "".concat(100 / a, "%"),
                                width: "".concat(100 / r, "%")
                            });
                            e(Le({
                                viewports: n
                            }))
                        }
                    }
                })(Y.f),
                Pe = (n(498), function (e) {
                    function t() {
                        return Object(r.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function () {
                            return g.a.createElement("div", {
                                className: "PluginSwitch"
                            }, g.a.createElement(Y.d, {
                                buttons: this.props.buttons,
                                text: "View"
                            }))
                        }
                    }]), t
                }(b.Component));
            Pe.defaultProps = {};
            var Ae = Pe,
                Ue = l.default.redux.actions.setLayout,
                Re = Object(W.connect)(function (e) {
                    var t = e.viewports,
                        n = t.activeViewportIndex,
                        a = t.layout;
                    return {
                        activeViewportIndex: n,
                        viewportSpecificData: t.viewportSpecificData,
                        layout: a
                    }
                }, function (e) {
                    return {
                        setLayout: function (t) {
                            e(Ue(t))
                        }
                    }
                }, function (e, t, n) {
                    return {
                        buttons: [{
                            label: "2D MPR",
                            icon: "cube",
                            onClick: function () {
                                ea.runCommand("mpr2d")
                            }
                        }]
                    }
                })(Ae),
                Fe = function (e) {
                    function t(e) {
                        var n;
                        Object(r.a)(this, t), n = Object(i.a)(this, Object(s.a)(t).call(this, e));
                        var a = Ve.call(Object(je.a)(n));
                        n.state = {
                            toolbarButtons: a,
                            activeButtons: [],
                            isCineDialogOpen: !1
                        }, n._handleBuiltIn = function () {
                            "CINE" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).behavior && this.setState({
                                isCineDialogOpen: !this.state.isCineDialogOpen
                            })
                        }.bind(Object(je.a)(n));
                        var o = na.modules[l.MODULE_TYPES.PANEL];
                        return n.buttonGroups = {
                            left: [{
                                value: "studies",
                                icon: "th-large",
                                bottomLabel: n.props.t("Series")
                            }],
                            right: []
                        }, o.forEach(function (e) {
                            var t = e.module,
                                a = Array.from(t.defaultContext);
                            t.menuOptions.forEach(function (e) {
                                var t = Array.from(e.context || a);
                                if (n.props.activeContexts.some(function (e) {
                                    return t.includes(e)
                                })) {
                                    var r = {
                                        value: e.target,
                                        icon: e.icon,
                                        bottomLabel: e.label
                                    },
                                        o = e.from || "right";
                                    n.buttonGroups[o].push(r)
                                }
                            })
                        }), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidUpdate",
                        value: function (e) {
                            e.activeContexts !== this.props.activeContexts && this.setState({
                                toolbarButtons: Ve.call(this)
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = function (e, t) {
                                    var n = this;
                                    return e.map(function (e, a) {
                                        var r = void 0;
                                        if (e.buttons && e.buttons.length) {
                                            var o = e.buttons.map(function (e) {
                                                return e.onClick = Be.bind(n, e), t.indexOf(e.id) > -1 && (r = e.id), e
                                            });
                                            return g.a.createElement(Y.d, {
                                                key: e.id,
                                                text: e.label,
                                                icon: e.icon,
                                                buttons: o,
                                                activeCommand: r
                                            })
                                        }
                                        return g.a.createElement(Y.m, {
                                            key: e.id,
                                            label: e.label,
                                            icon: e.icon,
                                            onClick: Be.bind(n, e),
                                            isActive: t.includes(e.id)
                                        })
                                    })
                                }.call(this, this.state.toolbarButtons, this.state.activeButtons),
                                n = {
                                    display: this.state.isCineDialogOpen ? "block" : "none",
                                    position: "absolute",
                                    top: "82px",
                                    zIndex: 999
                                },
                                a = function (t, n) {
                                    e.props.handleSidePanelChange(t, n)
                                },
                                r = a.bind(this, "left"),
                                o = a.bind(this, "right");
                            return g.a.createElement(g.a.Fragment, null, g.a.createElement("div", {
                                className: "ToolbarRow"
                            }, g.a.createElement("div", {
                                className: "pull-left m-t-1 p-y-1",
                                style: {
                                    padding: "10px"
                                }
                            }, g.a.createElement(Y.i, {
                                options: this.buttonGroups.left,
                                value: this.props.selectedLeftSidePanel || "",
                                onValueChanged: r
                            })), t, g.a.createElement(Ne, null), g.a.createElement(Re, null), g.a.createElement("div", {
                                className: "pull-right m-t-1 rm-x-1",
                                style: {
                                    marginLeft: "auto"
                                }
                            }, this.buttonGroups.right.length && g.a.createElement(Y.i, {
                                options: this.buttonGroups.right,
                                value: this.props.selectedRightSidePanel || "",
                                onValueChanged: o
                            }))), g.a.createElement("div", {
                                className: "CineDialogContainer",
                                style: n
                            }, g.a.createElement(Me, null)))
                        }
                    }]), t
                }(b.Component);

            function Be(e, t, n) {
                if (e.commandName) {
                    var a = Object.assign({
                        evt: t
                    }, e.commandOptions);
                    ea.runCommand(e.commandName, a)
                }
                "setToolActive" === e.type ? this.setState({
                    activeButtons: [e.id]
                }) : "builtIn" === e.type && this._handleBuiltIn(e.options)
            }

            function Ve() {
                var e = this,
                    t = na.modules[l.MODULE_TYPES.TOOLBAR],
                    n = [];
                return t.forEach(function (t) {
                    var a = t.module,
                        r = a.definitions,
                        o = a.defaultContext;
                    r.forEach(function (t) {
                        var a = t.context || o;
                        e.props.activeContexts.includes(a) && n.push(t)
                    })
                }), n
            }
            var He = Object(w.c)("Common")(Fe),
                _e = n(240),
                We = Object(_e.a)([function (e) {
                    return e.viewports.activeViewportIndex
                }, function (e) {
                    return e.viewports.layout.viewports
                }, function (e) {
                    return e.viewports.viewportSpecificData
                }], function (e, t, n) {
                    var a = ["VIEWER"],
                        r = t[e] || {},
                        o = n[e] || {},
                        i = r.plugin || o.plugin;
                    if (i) {
                        var s = "ACTIVE_VIEWPORT::".concat(i.toUpperCase());
                        a.push(s)
                    }
                    return a
                }),
                Ye = Object(W.connect)(function (e) {
                    return {
                        activeContexts: We(e)
                    }
                })(He),
                ze = (n(499), function (e) {
                    function t() {
                        return Object(r.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function () {
                            return g.a.createElement("div", {
                                className: "simpleDialog ".concat(this.props.rootClass),
                                ref: this.props.componentRef,
                                style: this.props.componentStyle
                            }, g.a.createElement("form", null, g.a.createElement("div", {
                                className: "header"
                            }, g.a.createElement("span", {
                                className: "closeBtn",
                                onClick: this.props.onClose
                            }, g.a.createElement("span", {
                                className: "closeIcon"
                            }, "x")), g.a.createElement("h4", {
                                className: "title"
                            }, this.props.headerTitle)), g.a.createElement("div", {
                                className: "content"
                            }, this.props.children), g.a.createElement("div", {
                                className: "footer"
                            }, g.a.createElement("button", {
                                type: "button",
                                className: "btn btn-cancel",
                                onClick: this.props.onClose
                            }, "Cancel"), g.a.createElement("button", {
                                type: "button",
                                className: "btn btn-confirm",
                                onClick: this.props.onConfirm
                            }, "Confirm"))))
                        }
                    }]), t
                }(b.Component));
            ze.defaultProps = {
                componentStyle: {},
                rootClass: ""
            };
            var Ge = ze;

            function qe(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e.current) {
                    var n = e.current,
                        a = n.offsetParent,
                        r = n.offsetTop,
                        o = n.offsetHeight,
                        i = n.offsetLeft,
                        s = n.offsetWidth,
                        c = t.top || r,
                        l = t.left || i;
                    if (a) {
                        var u = "".concat(a.offsetHeight, "px");
                        o + c > a.offsetHeight && (c -= o + c - a.offsetHeight) < 0 && (c = 0), l + s > a.offsetWidth && (l = a.offsetWidth - s) < 0 && (l = 0), u && n.style.maxHeight !== u && (n.style.maxHeight = u), n.style.top !== "".concat(c, "px") && (n.style.top = "".concat(c, "px")), n.style.left !== "".concat(l, "px") && (n.style.left = "".concat(l, "px"))
                    }
                }
            }
            var Je = {
                width: 96,
                height: 28
            };
            n(500);
            var Xe = function (e) {
                function t(e) {
                    var n;
                    return Object(r.a)(this, t), (n = Object(i.a)(this, Object(s.a)(t).call(this, e))).componentDidMount = function () {
                        qe(n.mainElement)
                    }, n.onClose = function () {
                        n.props.onCancel()
                    }, n.onConfirm = function () {
                        n.props.onUpdate(n.state.description)
                    }, n.handleChange = function (e) {
                        n.setState({
                            description: e.target.value
                        })
                    }, n.state = {
                        description: e.measurementData.description || ""
                    }, n.mainElement = g.a.createRef(), n
                }
                return Object(c.a)(t, e), Object(o.a)(t, [{
                    key: "componentDidUpdate",
                    value: function (e) {
                        this.props.description !== e.description && this.setState({
                            description: this.props.description
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = function (e) {
                            var t = Object.assign({}, e),
                                n = 320,
                                a = 230,
                                r = window.innerWidth - n,
                                o = window.innerHeight - a;
                            return t.left -= n / 2, t.top -= a / 2, t.left > r && (t.left = r), t.top > o && (t.top = o), t
                        }(this.props.componentStyle);
                        return g.a.createElement(Ge, {
                            headerTitle: "Edit Description",
                            onClose: this.onClose,
                            onConfirm: this.onConfirm,
                            rootClass: "editDescriptionDialog",
                            componentRef: this.mainElement,
                            componentStyle: e
                        }, g.a.createElement("input", {
                            value: this.state.description,
                            className: "simpleDialogInput",
                            id: "description",
                            autoComplete: "off",
                            autoFocus: !0,
                            onChange: this.handleChange
                        }))
                    }
                }]), t
            }(b.Component);
            Xe.defaultProps = {
                componentRef: g.a.createRef(),
                componentStyle: {}
            };
            n(501);
            var Ke = function (e) {
                function t() {
                    return Object(r.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                }
                return Object(c.a)(t, e), Object(o.a)(t, [{
                    key: "render",
                    value: function () {
                        return g.a.createElement(pe.a, {
                            in: this.props.displayComponent, appear: !0, timeout: 500, classNames: "labelling", onExited: this.props.onTransitionExit
                        }, this.props.children)
                    }
                }]), t
            }(b.Component),
                Qe = ["Abdomen/Chest Wall", "Adrenal", "Bladder", "Bone", "Brain", "Breast", "Colon", "Esophagus", "Extremities", "Gallbladder", "Kidney", "Liver", "Lung", "Lymph Node", "Mediastinum/Hilum", "Muscle", "Neck", "Other Soft Tissue", "Ovary", "Pancreas", "Pelvis", "Peritoneum/Omentum", "Prostate", "Retroperitoneum", "Small Bowel", "Spleen", "Stomach", "Subcutaneous"].map(function (e) {
                    return {
                        label: e,
                        value: e
                    }
                }),
                Ze = function (e) {
                    function t(e) {
                        var n;
                        Object(r.a)(this, t), (n = Object(i.a)(this, Object(s.a)(t).call(this, e))).componentDidUpdate = function () {
                            n.repositionComponent()
                        }, n.labellingStateFragment = function () {
                            var e = n.state,
                                t = e.skipAddLabelButton,
                                a = e.editLocation,
                                r = e.description,
                                o = e.locationLabel;
                            return t ? a ? g.a.createElement(Y.j, {
                                items: n.currentItems,
                                columns: 1,
                                onSelected: n.selectTreeSelectCalback,
                                selectTreeFirstTitle: "Assign Label",
                                onComponentChange: n.repositionComponent
                            }) : g.a.createElement(g.a.Fragment, null, g.a.createElement("div", {
                                className: "checkIconWrapper",
                                onClick: n.fadeOutAndLeaveFast
                            }, g.a.createElement(Y.e, {
                                name: "check",
                                className: "checkIcon"
                            })), g.a.createElement("div", {
                                className: "locationDescriptionWrapper"
                            }, g.a.createElement("div", {
                                className: "location"
                            }, o), g.a.createElement("div", {
                                className: "description"
                            }, g.a.createElement("input", {
                                id: "descriptionInput",
                                ref: n.descriptionInput,
                                defaultValue: r || "",
                                autoComplete: "off"
                            }))), g.a.createElement("div", {
                                className: "commonButtons"
                            }, g.a.createElement("button", {
                                type: "button",
                                className: "commonButton left",
                                onClick: n.relabel
                            }, "Relabel"), g.a.createElement("button", {
                                type: "button",
                                className: "commonButton right",
                                onClick: n.setDescriptionUpdateMode
                            }, r ? "Edit " : "Add ", "Description")), g.a.createElement("div", {
                                className: "editDescriptionButtons"
                            }, g.a.createElement("button", {
                                type: "button",
                                className: "commonButton left",
                                onClick: n.descriptionCancel
                            }, "Cancel"), g.a.createElement("button", {
                                type: "button",
                                className: "commonButton right",
                                onClick: n.descriptionSave
                            }, "Save"))) : g.a.createElement(g.a.Fragment, null, g.a.createElement("button", {
                                type: "button",
                                className: "addLabelButton",
                                onClick: n.showLabelling
                            }, n.state.location ? "Edit" : "Add", " Label"))
                        }, n.relabel = function () {
                            n.setState({
                                editLocation: !0
                            })
                        }, n.setDescriptionUpdateMode = function () {
                            n.descriptionInput.current.focus(), n.setState({
                                editDescription: !0
                            })
                        }, n.descriptionCancel = function () {
                            var e = Ie()(n.state).description,
                                t = void 0 === e ? "" : e;
                            n.descriptionInput.current.value = t, n.setState({
                                editDescription: !1
                            })
                        }, n.descriptionSave = function () {
                            var e = n.descriptionInput.current.value;
                            n.props.updateLabelling({
                                description: e
                            }), n.setState({
                                description: e,
                                editDescription: !1
                            })
                        }, n.selectTreeSelectCalback = function (e, t) {
                            var a = t.value;
                            n.props.updateLabelling({
                                location: a
                            });
                            var r = n.mainElement.current.offsetParent.offsetTop,
                                o = {
                                    top: e.nativeEvent.y - r - 25,
                                    left: n.state.componentStyle.left
                                };
                            n.setState({
                                editLocation: !1,
                                confirmationState: !0,
                                location: t.value,
                                locationLabel: t.label,
                                componentStyle: o
                            }), n.isTouchScreen && (n.setTimeout = setTimeout(function () {
                                n.setState({
                                    displayComponent: !1
                                })
                            }, 2e3))
                        }, n.showLabelling = function () {
                            n.setState({
                                skipAddLabelButton: !0,
                                editLocation: !1
                            })
                        }, n.fadeOutAndLeave = function () {
                            n.fadeOutTimer = setTimeout(function () {
                                n.setState({
                                    displayComponent: !1
                                })
                            }, 1e3)
                        }, n.fadeOutAndLeaveFast = function () {
                            n.setState({
                                displayComponent: !1
                            })
                        }, n.clearFadeOutTimer = function () {
                            n.fadeOutTimer && clearTimeout(n.fadeOutTimer)
                        }, n.repositionComponent = function () {
                            setTimeout(function () {
                                qe(n.mainElement)
                            }, 200)
                        };
                        var a = e.measurementData,
                            o = a.location,
                            c = a.locationLabel,
                            l = a.description,
                            u = e.componentStyle;
                        return e.skipAddLabelButton || (u = function (e, t) {
                            var n = e.handles,
                                a = n.start,
                                r = n.end,
                                o = t.currentPoints.client,
                                i = p.a.pixelToCanvas(t.element, a),
                                s = p.a.pixelToCanvas(t.element, r),
                                c = o.x - i.x,
                                l = o.y - i.y,
                                u = {
                                    left: s.x + c,
                                    top: s.y + l
                                };
                            return a.y > r.y && (u.top -= Je.height), a.x > r.x && (u.left -= Je.width), u
                        }(e.measurementData, e.eventData)), n.state = {
                            location: o,
                            locationLabel: c,
                            description: l,
                            skipAddLabelButton: e.skipAddLabelButton,
                            editDescription: e.editDescription,
                            editLocation: e.editLocation,
                            componentStyle: u,
                            confirmationState: !1,
                            displayComponent: !0
                        }, n.mainElement = g.a.createRef(), n.descriptionInput = g.a.createRef(), n.initialItems = Qe, n.currentItems = Ie()(n.initialItems), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function () {
                            var e = "labellingComponent";
                            this.state.editDescription && (e += " editDescription");
                            var t = Object.assign({}, this.state.componentStyle);
                            return this.state.skipAddLabelButton && (t.left -= 160), g.a.createElement(Ke, {
                                displayComponent: this.state.displayComponent,
                                onTransitionExit: this.props.labellingDoneCallback
                            }, g.a.createElement("div", {
                                className: e,
                                style: t,
                                ref: this.mainElement,
                                onMouseLeave: this.fadeOutAndLeave,
                                onMouseEnter: this.clearFadeOutTimer
                            }, this.labellingStateFragment()))
                        }
                    }]), t
                }(b.Component),
                $e = (n(502), function (e) {
                    function t(e) {
                        var n;
                        Object(r.a)(this, t), (n = Object(i.a)(this, Object(s.a)(t).call(this, e))).componentDidMount = function () {
                            document.addEventListener("touchstart", n.onTouchStart)
                        }, n.componentWillUnmount = function () {
                            document.removeEventListener("touchstart", n.onTouchStart)
                        }, n.getRenderComponent = function () {
                            var e = n.state,
                                t = e.editLocation,
                                a = e.editDescription,
                                r = e.editDescriptionOnDialog,
                                o = e.measurementData;
                            return r ? g.a.createElement(Xe, {
                                onCancel: n.props.labellingDoneCallback,
                                onUpdate: n.descriptionDialogUpdate,
                                componentRef: n.editDescriptionDialog,
                                componentStyle: n.state.componentStyle,
                                measurementData: o
                            }) : t || a ? g.a.createElement(Ze, Object.assign({}, n.props, {
                                componentStyle: n.state.componentStyle
                            })) : void 0
                        }, n.treatMeasurementData = function (e) {
                            var t = n.props,
                                a = t.editDescription,
                                r = t.editLocation;
                            a && (e.description = void 0), r && (e.location = void 0)
                        }, n.responseDialogUpdate = function (e) {
                            n.props.updateLabelling({
                                response: e
                            }), n.props.labellingDoneCallback()
                        }, n.descriptionDialogUpdate = function (e) {
                            n.props.updateLabelling({
                                description: e
                            }), n.props.labellingDoneCallback()
                        };
                        var a = Ie()(e.measurementData);
                        n.treatMeasurementData(a);
                        var o = e.editLocation;
                        return e.editDescription || e.editLocation || (o = !0), n.state = {
                            componentStyle: et(e.eventData),
                            skipAddLabelButton: e.skipAddLabelButton,
                            editLocation: o,
                            editDescription: e.editDescription,
                            editDescriptionOnDialog: e.editDescriptionOnDialog,
                            measurementData: a
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function () {
                            return this.getRenderComponent()
                        }
                    }]), t
                }(b.Component));

            function et(e) {
                var t = e.event;
                return {
                    left: t.clientX,
                    top: t.clientY
                }
            }
            $e.defaultProps = {
                skipAddLabelButton: !1,
                editLocation: !1,
                editDescription: !1,
                editDescriptionOnDialog: !1
            };
            var tt = function (e) {
                function t() {
                    return Object(r.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                }
                return Object(c.a)(t, e), Object(o.a)(t, [{
                    key: "render",
                    value: function () {
                        return this.props.visible ? g.a.createElement($e, this.props) : null
                    }
                }]), t
            }(b.Component);
            tt.defaultProps = {
                visible: !1
            };
            var nt = tt,
                at = Object(W.connect)(function (e) {
                    if (!e.ui || !e.ui.labelling) return {
                        visible: !1
                    };
                    var t = e.ui.labelling;
                    return Object(y.a)({
                        visible: !1
                    }, t)
                }, null)(nt),
                rt = Object(W.connect)(function (e, t) {
                    var n = e.loading.progress,
                        a = Ie()(t.studies);
                    return a.forEach(function (e) {
                        e.thumbnails.forEach(function (e) {
                            var t = e.displaySetInstanceUid,
                                a = "StackProgress:".concat(t),
                                r = n[a],
                                o = 0;
                            r && (o = r.percentComplete), e.stackPercentComplete = o
                        })
                    }), {
                            studies: a
                        }
                }, null)(Y.k),
                ot = (n(503), Object(W.connect)(function (e) {
                    var t, n = {},
                        a = na.modules[l.MODULE_TYPES.VIEWPORT];
                    return a.forEach(function (e) {
                        n[e.extensionId] = e.module
                    }), a.length && (t = a[0].extensionId), {
                            layout: e.viewports.layout,
                            activeViewportIndex: e.viewports.activeViewportIndex,
                            availablePlugins: n,
                            defaultPlugin: t
                        }
                }, null)(Y.g)),
                it = (n(504), ["Angle", "Bidirectional", "Length", "FreehandMouse", "EllipticalRoi", "CircleRoi", "RectangleRoi"]),
                st = [{
                    actionType: "Delete",
                    action: function (e) {
                        var t = e.nearbyToolData,
                            n = e.eventData.element;
                        T.a.removeToolState(n, t.toolType, t.tool), p.a.updateImage(n)
                    }
                }, {
                    actionType: "setLabel",
                    action: function (e) {
                        var t = e.nearbyToolData;
                        K(e.eventData, t.tool, {
                            skipAddLabelButton: !0,
                            editLocation: !0
                        })
                    }
                }, {
                    actionType: "setDescription",
                    action: function (e) {
                        var t = e.nearbyToolData;
                        K(e.eventData, t.tool, {
                            editDescriptionOnDialog: !0
                        })
                    }
                }];

            function ct(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = (arguments.length > 2 && arguments[2], function (e, t, n) {
                        var a = {},
                            r = !1;
                        return n.forEach(function (n) {
                            var o = T.a.getToolState(e, n);
                            if (o) return o.data.forEach(function (o, i) {
                                var s = T.a.getToolForElement(e, n);
                                if (s || (s = T.a.getToolForElement(e, "".concat(n, "Tool"))), !s) throw new Error("Tool not found.");
                                s.pointNearTool(e, o, t) && (r = !0, a.tool = o, a.index = i, a.toolType = n)
                            }), !r && void 0
                        }), r ? a : void 0
                    }(e.element, e.currentPoints.canvas, it));
                if (!t || !n || "arrowAnnotate" !== n.toolType) {
                    var a = [];
                    return n && st.forEach(function (t) {
                        t.params = {
                            eventData: e,
                            nearbyToolData: n
                        }, "Delete" === t.actionType && (t.text = "Delete measurement"), "setLabel" === t.actionType && (t.text = "Relabel"), "setDescription" === t.actionType && (t.text = "".concat(n.tool.description ? "Edit" : "Add", " Description")), a.push(t)
                    }), a
                }
            }
            var lt = function (e) {
                function t(e) {
                    var n;
                    return Object(r.a)(this, t), (n = Object(i.a)(this, Object(s.a)(t).call(this, e))).componentDidMount = function () {
                        n.mainElement.current && n.updateElementPosition()
                    }, n.componentDidUpdate = function () {
                        n.mainElement.current && n.updateElementPosition()
                    }, n.updateElementPosition = function () {
                        var e = n.mainElement.current,
                            t = e.offsetParent,
                            a = e.offsetTop,
                            r = e.offsetHeight,
                            o = e.offsetWidth,
                            i = e.offsetLeft,
                            s = n.props.eventData;
                        if (a + r > t.offsetHeight) {
                            var c = a + r - t.offsetHeight,
                                l = s.currentPoints.canvas.y - c;
                            n.mainElement.current.style.top = "".concat(l > 0 ? l : 0, "px")
                        }
                        if (i + o > t.offsetWidth) {
                            var u = i + o - t.offsetWidth,
                                p = s.currentPoints.canvas.x - u;
                            n.mainElement.current.style.left = "".concat(p > 0 ? p : 0, "px")
                        }
                    }, n.mainElement = g.a.createRef(), n
                }
                return Object(c.a)(t, e), Object(o.a)(t, [{
                    key: "render",
                    value: function () {
                        var e = this;
                        if (!this.props.eventData) return null;
                        var t = this.props,
                            n = t.isTouchEvent,
                            a = t.eventData,
                            r = ct(a, n, t.availableTools);
                        if (!r.length) return "";
                        var o = r.map(function (t) {
                            return g.a.createElement("li", {
                                key: t.actionType
                            }, g.a.createElement("button", {
                                className: "form-action",
                                onClick: function (n) {
                                    t.action(t.params), e.props.onClose && e.props.onClose()
                                }
                            }, g.a.createElement("span", {
                                key: t.actionType
                            }, t.text)))
                        }),
                            i = {
                                top: "".concat(a.currentPoints.canvas.y, "px"),
                                left: "".concat(a.currentPoints.canvas.x, "px")
                            };
                        return g.a.createElement("div", {
                            className: "ToolContextMenu",
                            style: i,
                            ref: this.mainElement
                        }, g.a.createElement("ul", {
                            className: "bounded"
                        }, o))
                    }
                }]), t
            }(b.Component);
            lt.defaultProps = {
                visible: !0,
                isTouchEvent: !1
            };
            var ut = lt,
                pt = Object(W.connect)(function (e, t) {
                    if (!e.ui || !e.ui.contextMenu) return {
                        visible: !1
                    };
                    var n, a = t.viewportIndex,
                        r = e.ui.contextMenu[a];
                    return e.extensions && e.extensions.cornerstone && e.extensions.cornerstone.availableTools && (n = e.extensions.cornerstone.availableTools), Object(y.a)({}, r, {
                        availableTools: n
                    })
                }, null)(ut),
                dt = function (e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), (n = Object(i.a)(this, Object(s.a)(t).call(this, e))).getViewportData = function () {
                            for (var e = [], t = n.props, a = t.layout, r = t.viewportSpecificData, o = 0; o < a.viewports.length; o++) {
                                var i = r[o];
                                if (i && !i.displaySetInstanceUid && (i = n.cachedViewportData[o]), i && i.studyInstanceUid && i.displaySetInstanceUid) {
                                    var s = n.findDisplaySet(n.props.studies, i.studyInstanceUid, i.displaySetInstanceUid);
                                    e.push(Object.assign({}, s, i))
                                } else {
                                    i = n.state.displaySets.find(function (t) {
                                        return !e.some(function (e) {
                                            return e.displaySetInstanceUid === t.displaySetInstanceUid
                                        })
                                    }), e.push(Object.assign({}, i))
                                }
                            }
                            return n.cachedViewportData = e, e
                        }, n.setViewportData = function (e) {
                            var t = e.viewportIndex,
                                a = e.item,
                                r = n.findDisplaySet(n.props.studies, a.studyInstanceUid, a.displaySetInstanceUid);
                            n.props.setViewportSpecificData(t, r)
                        }, n.state = {
                            displaySets: []
                        }, n.cachedViewportData = {}, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "getDisplaySets",
                        value: function (e) {
                            var t = [];
                            return e.forEach(function (e) {
                                e.displaySets.forEach(function (e) {
                                    e.plugin || (e.plugin = "cornerstone"), t.push(e)
                                })
                            }), t
                        }
                    }, {
                        key: "findDisplaySet",
                        value: function (e, t, n) {
                            var a = e.find(function (e) {
                                return e.studyInstanceUid === t
                            });
                            if (a) return a.displaySets.find(function (e) {
                                return e.displaySetInstanceUid === n
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            if (this.props.studies) {
                                var e = this.getDisplaySets(this.props.studies);
                                this.setState({
                                    displaySets: e
                                })
                            }
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (e) {
                            if (this.props.studies !== e.studies) {
                                var t = this.getDisplaySets(this.props.studies);
                                this.setState({
                                    displaySets: t
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return g.a.createElement("div", {
                                className: "ViewerMain"
                            }, this.state.displaySets.length && g.a.createElement(ot, {
                                studies: this.props.studies,
                                viewportData: this.getViewportData(),
                                setViewportData: this.setViewportData
                            }, g.a.createElement(pt, null)))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            var e = this,
                                t = this.props.viewportSpecificData;
                            Object.keys(t).forEach(function (t) {
                                e.props.clearViewportSpecificData(t)
                            })
                        }
                    }]), t
                }(b.Component),
                mt = l.default.redux.actions,
                ft = mt.setViewportSpecificData,
                ht = mt.clearViewportSpecificData,
                vt = Object(W.connect)(function (e) {
                    var t = e.viewports;
                    return {
                        activeViewportIndex: t.activeViewportIndex,
                        layout: t.layout,
                        viewportSpecificData: t.viewportSpecificData,
                        viewports: e.viewports
                    }
                }, function (e) {
                    return {
                        setViewportSpecificData: function (t, n) {
                            e(ft(t, n))
                        },
                        clearViewportSpecificData: function () {
                            e(ht())
                        }
                    }
                })(dt),
                bt = (n(505), function (e) {
                    function t() {
                        return Object(r.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function () {
                            var e = "right" === this.props.from ? "from-right" : "from-left",
                                t = this.props.width ? {
                                    maxWidth: this.props.width,
                                    marginRight: this.props.isOpen ? "0" : -1 * Number.parseInt(this.props.width)
                                } : {};
                            return g.a.createElement("section", {
                                style: t,
                                className: ge()("sidepanel", e, {
                                    "is-open": this.props.isOpen
                                })
                            }, this.props.children)
                        }
                    }]), t
                }(b.Component)),
                gt = g.a.createContext(),
                yt = (n(506), function (e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), (n = Object(i.a)(this, Object(s.a)(t).call(this, e))).state = {
                            isLeftSidePanelOpen: !0,
                            isRightSidePanelOpen: !1,
                            selectedRightSidePanel: "",
                            selectedLeftSidePanel: "studies",
                            thumbnails: []
                        }, n.retrieveMeasurements = function (e, t) {
                            return l.default.log.info("retrieveMeasurements"), Promise.resolve()
                        }, n.storeMeasurements = function (e, t) {
                            return l.default.log.info("storeMeasurements"), Promise.resolve()
                        }, n.retrieveTimepoints = function (e) {
                            l.default.log.info("retrieveTimepoints");
                            var t = (new Date).toISOString(),
                                a = (new Date).toISOString();
                            return n.props.studies && (a = new Date("1000-01-01").toISOString(), n.props.studies.forEach(function (e) {
                                var n = G()(e.studyDate, "YYYYMMDD").toISOString();
                                n < t && (t = n), n > a && (a = n)
                            })), Promise.resolve([{
                                timepointType: "baseline",
                                timepointId: "TimepointId",
                                studyInstanceUids: n.props.studyInstanceUids,
                                patientId: e.patientId,
                                earliestDate: t,
                                latestDate: a,
                                isLocked: !1
                            }])
                        }, n.storeTimepoints = function (e) {
                            return l.default.log.info("storeTimepoints"), Promise.resolve()
                        }, n.updateTimepoint = function (e, t) {
                            return l.default.log.info("updateTimepoint"), Promise.resolve()
                        }, n.removeTimepoint = function (e) {
                            return l.default.log.info("removeTimepoint"), Promise.resolve()
                        }, n.disassociateStudy = function (e, t) {
                            return l.default.log.info("disassociateStudy"), Promise.resolve()
                        }, n.onTimepointsUpdated = function (e) {
                            n.props.onTimepointsUpdated && n.props.onTimepointsUpdated(e)
                        }, n.onMeasurementsUpdated = function (e) {
                            n.props.onMeasurementsUpdated && n.props.onMeasurementsUpdated(e)
                        }, l.default.measurements.MeasurementApi.setConfiguration({
                            dataExchange: {
                                retrieve: n.retrieveMeasurements,
                                store: n.storeMeasurements
                            }
                        }), l.default.measurements.TimepointApi.setConfiguration({
                            dataExchange: {
                                retrieve: n.retrieveTimepoints,
                                store: n.storeTimepoints,
                                remove: n.removeTimepoint,
                                update: n.updateTimepoint,
                                disassociate: n.disassociateStudy
                            }
                        }), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this.props.studies,
                                t = l.default.measurements,
                                n = t.TimepointApi,
                                a = t.MeasurementApi,
                                r = new n("TimepointId", {
                                    onTimepointsUpdated: this.onTimepointsUpdated
                                }),
                                o = new a(r, {
                                    onMeasurementsUpdated: this.onMeasurementsUpdated
                                });
                            if (this.currentTimepointId = "TimepointId", this.timepointApi = r, this.measurementApi = o, e) {
                                var i = e[0] && e[0].patientId;
                                r.retrieveTimepoints({
                                    patientId: i
                                }), o.retrieveMeasurements(i, ["TimepointId"]), this.setState({
                                    thumbnails: Et(e)
                                })
                            }
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (e) {
                            if (this.props.studies !== e.studies) {
                                var t = this.props.studies,
                                    n = t[0] && t[0].patientId,
                                    a = this.currentTimepointId;
                                this.timepointApi.retrieveTimepoints({
                                    patientId: n
                                }), this.measurementApi.retrieveMeasurements(n, [a]), this.setState({
                                    thumbnails: Et(t)
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e, t, n = this;
                            return na.modules[l.MODULE_TYPES.PANEL].forEach(function (a) {
                                a.module.components.forEach(function (a) {
                                    a.id === n.state.selectedRightSidePanel ? t = a.component : a.id === n.state.selectedLeftSidePanel && (e = a.component)
                                })
                            }), g.a.createElement(g.a.Fragment, null, g.a.createElement(Se.Consumer, null, function (e) {
                                return g.a.createElement(gt.Consumer, null, function (t) {
                                    return g.a.createElement(De, {
                                        home: !1,
                                        userManager: t
                                    }, e.logoComponent)
                                })
                            }), g.a.createElement(Ye, {
                                isLeftSidePanelOpen: this.state.isLeftSidePanelOpen,
                                isRightSidePanelOpen: this.state.isRightSidePanelOpen,
                                selectedLeftSidePanel: this.state.isLeftSidePanelOpen ? this.state.selectedLeftSidePanel : "",
                                selectedRightSidePanel: this.state.isRightSidePanelOpen ? this.state.selectedRightSidePanel : "",
                                handleSidePanelChange: function (e, t) {
                                    var a = e && e[0].toUpperCase() + e.slice(1),
                                        r = "is".concat(a, "SidePanelOpen"),
                                        o = "selected".concat(a, "SidePanel"),
                                        i = Object.assign({}, n.state),
                                        s = i[r],
                                        c = i[o],
                                        l = c === t || null === t;
                                    i[o] = t || c, (!s || l) && (i[r] = !i[r]), n.setState(i)
                                }
                            }), g.a.createElement("div", {
                                className: "FlexboxLayout"
                            }, g.a.createElement(bt, {
                                from: "left",
                                isOpen: this.state.isLeftSidePanelOpen
                            }, e ? g.a.createElement(e, {
                                viewports: this.props.viewports,
                                activeIndex: this.props.activeViewportIndex
                            }) : g.a.createElement(rt, {
                                studies: this.state.thumbnails
                            })), g.a.createElement("div", {
                                className: ge()("main-content")
                            }, g.a.createElement(vt, {
                                studies: this.props.studies
                            })), g.a.createElement(bt, {
                                from: "right",
                                isOpen: this.state.isRightSidePanelOpen
                            }, t && g.a.createElement(t, {
                                viewports: this.props.viewports,
                                activeIndex: this.props.activeViewportIndex
                            }))), g.a.createElement(at, null))
                        }
                    }]), t
                }(b.Component)),
                Et = function (e) {
                    return e.map(function (e) {
                        return {
                            studyInstanceUid: e.studyInstanceUid,
                            thumbnails: e.displaySets.map(function (e) {
                                var t, n, a = e.displaySetInstanceUid,
                                    r = e.seriesDescription,
                                    o = e.seriesNumber,
                                    i = e.instanceNumber,
                                    s = e.numImageFrames;
                                if (e.modality && "SEG" === e.modality) n = "SEG";
                                else if (e.images && e.images.length) {
                                    var c = Math.floor(e.images.length / 2);
                                    t = e.images[c].getImageId()
                                } else n = e.modality ? e.modality : "UN";
                                return {
                                    imageId: t,
                                    altImageText: n,
                                    displaySetInstanceUid: a,
                                    seriesDescription: r,
                                    seriesNumber: o,
                                    instanceNumber: i,
                                    numImageFrames: s
                                }
                            })
                        }
                    })
                },
                St = l.default.redux.actions,
                Ot = St.setTimepoints,
                wt = St.setMeasurements,
                kt = Object(W.connect)(function (e, t) {
                    return {
                        viewports: e.viewports.viewportSpecificData,
                        activeViewportIndex: e.viewports.activeViewportIndex
                    }
                }, function (e) {
                    return {
                        onTimepointsUpdated: function (t) {
                            e(Ot(t))
                        },
                        onMeasurementsUpdated: function (t) {
                            e(wt(t))
                        }
                    }
                })(yt),
                Dt = l.metadata.OHIFStudyMetadata,
                jt = l.studies.retrieveStudiesMetadata,
                Ct = l.utils.studyMetadataManager,
                It = l.utils.updateMetaDataManager,
                Tt = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            studies: null,
                            error: null
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = Object(ve.a)(he.a.mark(function e() {
                                var t, n, a, r, o, i;
                                return he.a.wrap(function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.props, n = t.studyInstanceUids, a = t.seriesInstanceUids, r = t.server, e.prev = 1, e.next = 4, jt(r, n, a);
                                        case 4:
                                            o = e.sent, Ct.purge(), i = o.map(function (e) {
                                                var t = new Dt(e, e.studyInstanceUid),
                                                    n = na.modules.sopClassHandlerModule;
                                                return e.displaySets = e.displaySets || t.createDisplaySets(n), t.setDisplaySets(e.displaySets), It(e), Ct.add(t), e
                                            }), this.setState({
                                                studies: i
                                            }), e.next = 14;
                                            break;
                                        case 10:
                                            throw e.prev = 10, e.t0 = e.catch(1), this.setState({
                                                error: !0
                                            }), new Error(e.t0);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                        [1, 10]
                                    ])
                            }));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function () {
                            return this.state.error ? g.a.createElement("div", null, "Error: ", JSON.stringify(this.state.error)) : g.a.createElement(kt, {
                                studies: this.state.studies,
                                studyInstanceUids: this.props.studyInstanceUids
                            })
                        }
                    }]), t
                }(b.Component),
                xt = function (e) {
                    return !0 === e.active
                },
                Mt = Object(W.connect)(function (e) {
                    return {
                        server: e.servers.servers.find(xt)
                    }
                }, null)(Tt);
            var Lt = Object(le.f)(function (e) {
                var t, n = function (e) {
                    return e ? me.a.parse(e.search) : {}
                }(e.location),
                    a = n.requestType,
                    r = n.studyUID;
                switch (a) {
                    case "STUDY":
                        return g.a.createElement(Mt, {
                            studyInstanceUids: r.split(";")
                        });
                    case "STUDYBASE64":
                        return g.a.createElement(Mt, {
                            studyInstanceUids: (t = r, window.atob(t).split(";"))
                        });
                    case "PATIENT":
                    default:
                        return ""
                }
            });
            var Nt = function (e) {
                var t, n, a = e.match,
                    r = a.params,
                    o = r.studyInstanceUids,
                    i = r.seriesInstanceUids;
                return o && !i ? t = o.split(";") : o && i && (t = [o], n = a.params.seriesInstanceUids.split(";")), g.a.createElement(Mt, {
                    studyInstanceUids: t,
                    seriesInstanceUids: n
                })
            },
                Pt = n(134),
                At = n(52);

            function Ut(e) {
                var t = new Set;
                e.forEach(function (e) {
                    t.add(e.StudyInstanceUID)
                });
                var n = [];
                return Array.from(t).forEach(function (t) {
                    var a = e.filter(function (e) {
                        return e.StudyInstanceUID === t
                    }),
                        r = a[0],
                        o = {
                            studyInstanceUid: r.StudyInstanceUID,
                            studyDate: r.StudyDate,
                            studyTime: r.StudyTime,
                            accessionNumber: r.AccessionNumber,
                            referringPhysicianName: r.ReferringPhysicianName,
                            patientName: r.PatientName,
                            patientId: r.PatientID,
                            patientBirthdate: r.PatientBirthDate,
                            patientSex: r.PatientSex,
                            studyId: r.StudyID,
                            studyDescription: r.StudyDescription,
                            seriesList: []
                        },
                        i = new Set;
                    a.forEach(function (e) {
                        i.add(e.SeriesInstanceUID)
                    }), Array.from(i).forEach(function (e) {
                        var t = a.filter(function (t) {
                            return t.SeriesInstanceUID === e
                        }),
                            n = new Set;
                        t.forEach(function (e) {
                            n.add(e.SOPInstanceUID), o.seriesList.push({
                                seriesInstanceUid: e.SeriesInstanceUID,
                                seriesDescription: e.SeriesDescription,
                                seriesNumber: e.SeriesNumber,
                                instances: []
                            })
                        }), Array.from(n).forEach(function (n) {
                            var a = t.find(function (e) {
                                return e.SOPInstanceUID === n
                            });
                            o.seriesList.find(function (t) {
                                return t.seriesInstanceUid === e
                            }).instances.push({
                                sopInstanceUid: a.SOPInstanceUID,
                                sopClassUid: a.SOPClassUID,
                                rows: a.Rows,
                                columns: a.Columns,
                                numberOfFrames: a.NumberOfFrames,
                                instanceNumber: a.InstanceNumber,
                                getImageId: function () {
                                    return a.imageId
                                }
                            })
                        })
                    }), n.push(o)
                }), console.warn(n), n
            }

            function Rt(e) {
                return Ft.apply(this, arguments)
            }

            function Ft() {
                return (Ft = Object(ve.a)(he.a.mark(function e(t) {
                    var n, a, r;
                    return he.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.map(function (e) {
                                    var t = m.a.wadouri.fileManager.add(e);
                                    return p.a.loadAndCacheImage(t).catch(function (e) {
                                        return console.warn(e)
                                    })
                                }), e.next = 3, Promise.all(n);
                            case 3:
                                return a = e.sent, r = [], a.forEach(function (e) {
                                    if (e && e.data) {
                                        var t = e.data.byteArray.buffer,
                                            n = At.data.DicomMessage.readFile(t),
                                            a = At.data.DicomMetaDictionary.naturalizeDataset(n.dict);
                                        a._meta = At.data.DicomMetaDictionary.namifyDataset(n.meta), a.imageId = e.imageId, r.push(a)
                                    }
                                }), e.abrupt("return", Ut(r));
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            n(507);
            var Bt = l.metadata.OHIFStudyMetadata,
                Vt = l.utils.studyMetadataManager,
                Ht = l.utils.updateMetaDataManager,
                _t = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            studies: null,
                            loading: !1,
                            error: null
                        }, n.updateStudies = function (e) {
                            Vt.purge();
                            var t = e.map(function (e) {
                                var t = new Bt(e, e.studyInstanceUid),
                                    n = na.modules.sopClassHandlerModule;
                                return e.displaySets = e.displaySets || t.createDisplaySets(n), t.setDisplaySets(e.displaySets), Ht(e), Vt.add(t), e
                            });
                            n.setState({
                                studies: t
                            })
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function () {
                            var e = this,
                                t = function () {
                                    var t = Object(ve.a)(he.a.mark(function t(n) {
                                        var a, r;
                                        return he.a.wrap(function (t) {
                                            for (; ;) switch (t.prev = t.next) {
                                                case 0:
                                                    return e.setState({
                                                        loading: !0
                                                    }), t.next = 3, Rt(n);
                                                case 3:
                                                    if (a = t.sent, r = e.updateStudies(a)) {
                                                        t.next = 7;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 7:
                                                    e.setState({
                                                        studies: r,
                                                        loading: !1
                                                    });
                                                case 8:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }, t)
                                    }));
                                    return function (e) {
                                        return t.apply(this, arguments)
                                    }
                                }();
                            return this.state.error ? g.a.createElement("div", null, "Error: ", JSON.stringify(this.state.error)) : g.a.createElement(Pt.a, {
                                onDrop: t
                            }, function (t) {
                                var n = t.getRootProps,
                                    a = t.getInputProps;
                                return g.a.createElement("div", Object.assign({}, n(), {
                                    style: {
                                        width: "100%",
                                        height: "100%"
                                    }
                                }), e.state.studies ? g.a.createElement(kt, {
                                    studies: e.state.studies,
                                    studyInstanceUids: e.state.studies && e.state.studies.map(function (e) {
                                        return e.studyInstanceUid
                                    })
                                }) : g.a.createElement("div", {
                                    className: "drag-drop-instructions"
                                }, g.a.createElement("div", {
                                    className: "drag-drop-contents"
                                }, e.state.loading ? g.a.createElement("h3", null, e.props.t("Loading...")) : g.a.createElement(g.a.Fragment, null, g.a.createElement("h3", null, e.props.t("Drag and Drop DICOM files here to load them in the Viewer")), g.a.createElement("h4", null, e.props.t("Or click to load the browser's file selector")))), g.a.createElement("input", Object.assign({}, a(), {
                                    style: {
                                        display: "none"
                                    }
                                }))))
                            })
                        }
                    }]), t
                }(b.Component),
                Wt = Object(w.c)("Common")(_t),
                Yt = n(111),
                zt = n(65),
                Gt = n.n(zt);

            function qt(e) {
                if (0 === e) return "0 B";
                var t = Math.floor(Math.log(e) / Math.log(1024));
                return 1 * (e / Math.pow(1024, t)).toFixed(2) + " " + ["B", "kB", "MB", "GB", "TB"][t]
            }

            function Jt(e) {
                if (!e) return "Unknown error";
                if (e.response) try {
                    var t = JSON.parse(e.response);
                    if (t.error && t.error.code && t.error.message) return t.error.code + " - " + t.error.message
                } catch (n) {
                    return e.response
                }
                return e.message || "Unknown error."
            }

            function Xt(e) {
                if (e.length <= 132) return !1;
                var t = new Uint8Array(e.slice(128, 132));
                return Array.from("DICM").every(function (e, n) {
                    return e.charCodeAt(0) === t[n]
                })
            }
            var Kt = function () {
                function e() {
                    Object(r.a)(this, e), this.cancelled = !1
                }
                return Object(o.a)(e, [{
                    key: "get",
                    value: function () {
                        return this.cancelled
                    }
                }, {
                    key: "set",
                    value: function (e) {
                        this.cancelled = e
                    }
                }]), e
            }(),
                Qt = n(242),
                Zt = new (function () {
                    function e() {
                        Object(r.a)(this, e)
                    }
                    return Object(o.a)(e, [{
                        key: "smartUpload",
                        value: function () {
                            var e = Object(ve.a)(he.a.mark(function e(t, n, a, r) {
                                var o, i, s, c, l, u, p = this;
                                return he.a.wrap(function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            if (o = 1, i = 50, 0 !== (s = Array.from(t)).length) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("No files were provided.");
                                        case 5:
                                            return c = Math.min(s.length, i), l = !1, u = function () {
                                                var e = Object(ve.a)(he.a.mark(function e(t, i) {
                                                    var c, u;
                                                    return he.a.wrap(function (e) {
                                                        for (; ;) switch (e.prev = e.next) {
                                                            case 0:
                                                                c = he.a.mark(function e() {
                                                                    var i, c;
                                                                    return he.a.wrap(function (e) {
                                                                        for (; ;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                if (!r.get()) {
                                                                                    e.next = 2;
                                                                                    break
                                                                                }
                                                                                return e.abrupt("return", {
                                                                                    v: void 0
                                                                                });
                                                                            case 2:
                                                                                if (i = s.slice(0, o), s = s.slice(o), c = null, e.prev = 5, !(i.length > 1)) {
                                                                                    e.next = 8;
                                                                                    break
                                                                                }
                                                                                throw new Error("Not implemented");
                                                                            case 8:
                                                                                if (1 !== i.length) {
                                                                                    e.next = 11;
                                                                                    break
                                                                                }
                                                                                return e.next = 11, p.simpleUpload(i[0], n);
                                                                            case 11:
                                                                                e.next = 16;
                                                                                break;
                                                                            case 13:
                                                                                e.prev = 13, e.t0 = e.catch(5), c = Jt(e.t0);
                                                                            case 16:
                                                                                if (i.forEach(function (e) {
                                                                                    return a(e.fileId, c)
                                                                                }), l || 0 !== s.length) {
                                                                                    e.next = 21;
                                                                                    break
                                                                                }
                                                                                return l = !0, t(), e.abrupt("return", {
                                                                                    v: void 0
                                                                                });
                                                                            case 21:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }, e, null, [
                                                                            [5, 13]
                                                                        ])
                                                                });
                                                            case 1:
                                                                if (!(s.length > 0)) {
                                                                    e.next = 8;
                                                                    break
                                                                }
                                                                return e.delegateYield(c(), "t0", 3);
                                                            case 3:
                                                                if ("object" !== typeof (u = e.t0)) {
                                                                    e.next = 6;
                                                                    break
                                                                }
                                                                return e.abrupt("return", u.v);
                                                            case 6:
                                                                e.next = 1;
                                                                break;
                                                            case 8:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }, e)
                                                }));
                                                return function (t, n) {
                                                    return e.apply(this, arguments)
                                                }
                                            }(), e.next = 10, new Promise(function (e) {
                                                for (var t = 0; t < c; t++) u(e)
                                            });
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function (t, n, a, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "simpleUpload",
                        value: function () {
                            var e = Object(ve.a)(he.a.mark(function e(t, n) {
                                var a, r, o;
                                return he.a.wrap(function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = this.getClient(n), e.next = 3, this.readFile(t);
                                        case 3:
                                            if (r = e.sent, Xt(o = r.content)) {
                                                e.next = 7;
                                                break
                                            }
                                            throw new Error("This is not a valid DICOM file.");
                                        case 7:
                                            return e.next = 9, a.storeInstances({
                                                datasets: [o]
                                            });
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function (t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "readFile",
                        value: function (e) {
                            return new Promise(function (t, n) {
                                var a = new FileReader;
                                a.onload = function () {
                                    t({
                                        name: e.name,
                                        size: e.size,
                                        type: e.type,
                                        content: a.result
                                    })
                                }, a.onerror = function (e) {
                                    return n(e)
                                }, a.readAsArrayBuffer(e)
                            })
                        }
                    }, {
                        key: "setRetrieveAuthHeaderFunction",
                        value: function (e) {
                            this.retrieveAuthHeaderFunc = e
                        }
                    }, {
                        key: "getClient",
                        value: function (e) {
                            var t = this.retrieveAuthHeaderFunc();
                            return new Qt.a.DICOMwebClient({
                                url: e,
                                headers: t
                            })
                        }
                    }]), e
                }()),
                $t = (n(539), function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            status: "Upload",
                            isCancelled: !1,
                            errorsCount: 0,
                            files: null,
                            uploadedVolume: null,
                            wholeVolumeStr: null,
                            isFilesListHidden: !0,
                            timeLeft: null,
                            uploadedList: null,
                            totalCount: 0,
                            successfullyUploadedCount: 0,
                            lastFile: "",
                            uploadContext: null
                        }, n.uploadFiles = function (e) {
                            var t = Array.from(e.target.files),
                                a = {};
                            t.forEach(function (e, t) {
                                var n = {
                                    id: t,
                                    name: e.name,
                                    path: e.webkitRelativePath || e.name,
                                    size: e.size,
                                    error: null,
                                    processed: !1,
                                    processedInUI: !1
                                };
                                a[t] = n, e.fileId = t
                            });
                            var r = t.map(function (e) {
                                return e.size
                            }).reduce(function (e, t) {
                                return e + t
                            }),
                                o = Math.random();
                            n.setState({
                                status: "Uploading...",
                                files: a,
                                uploadedList: [],
                                uploadedVolume: 0,
                                lastFile: t[0].name,
                                totalCount: t.length,
                                wholeVolumeStr: qt(r),
                                uploadContext: o,
                                cancellationToken: new Kt
                            });
                            var i = new Kt;
                            Zt.setRetrieveAuthHeaderFunction(n.props.retrieveAuthHeaderFunction), Zt.smartUpload(e.target.files, n.props.url, function (e, t) {
                                return o === n.state.uploadContext && n.uploadCallback.call(Object(je.a)(n), e, t)
                            }, i)
                        }, n.renderTableRow = function (e) {
                            var t = null;
                            return null !== e.error && (t = g.a.createElement("p", {
                                style: {
                                    color: "red"
                                }
                            }, e.error)), g.a.createElement("tr", {
                                key: e.id
                            }, g.a.createElement("td", {
                                className: "project"
                            }, e.name, " ", t))
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "filesLeft",
                        value: function () {
                            return this.state.uploadedList.length + " of " + this.state.totalCount + " files"
                        }
                    }, {
                        key: "volumeLeft",
                        value: function () {
                            return qt(this.state.uploadedVolume) + " of " + this.state.wholeVolumeStr
                        }
                    }, {
                        key: "percents",
                        value: function () {
                            return parseInt(100 * this.state.uploadedList.length / Object.keys(this.state.files).length)
                        }
                    }, {
                        key: "isFinished",
                        value: function () {
                            return this.state.isCancelled || Object.keys(this.state.files).length === this.state.uploadedList.length
                        }
                    }, {
                        key: "errorsMessage",
                        value: function () {
                            var e = 1 === this.state.errorsCount ? " error" : " errors";
                            return this.state.errorsCount + e + " while uploading, click for more info"
                        }
                    }, {
                        key: "uploadCallback",
                        value: function (e, t) {
                            var n = this.state.files[e];
                            if (n.processed = !0, t) n.error = t, this.setState({
                                errorsCount: this.state.errorsCount + 1
                            });
                            else {
                                var a = this.state.uploadedVolume + n.size;
                                this.setState({
                                    uploadedVolume: a
                                })
                            }
                            this.setState({
                                lastFile: n.name
                            });
                            var r = this.state.uploadedList;
                            r.push(n), this.setState({
                                uploadedList: r
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return null === this.state.files ? g.a.createElement("div", {
                                className: "dicom-uploader"
                            }, g.a.createElement("div", {
                                className: "button"
                            }, g.a.createElement("label", {
                                htmlFor: "file"
                            }, g.a.createElement("img", {
                                src: "./assets/Button_File.svg",
                                alt: "upload file"
                            })), g.a.createElement("input", {
                                className: "invisible-input",
                                onChange: this.uploadFiles,
                                type: "file",
                                id: "file",
                                multiple: !0
                            })), g.a.createElement("div", {
                                className: "button"
                            }, g.a.createElement("label", {
                                htmlFor: "folder"
                            }, g.a.createElement("img", {
                                src: "./assets/Button_Folder.svg",
                                alt: "upload folder"
                            })), g.a.createElement("input", {
                                className: "invisible-input",
                                type: "file",
                                onChange: this.uploadFiles,
                                id: "folder",
                                webkitdirectory: "true",
                                mozdirectory: "true",
                                multiple: !0
                            }))) : g.a.createElement("table", {
                                id: "tblProjectList",
                                className: "table noselect"
                            }, g.a.createElement("thead", null, g.a.createElement("tr", null, g.a.createElement("th", {
                                className: "table-header"
                            }, this.percents(), "% ", this.filesLeft()))), g.a.createElement("tbody", {
                                id: "ProjectList"
                            }, this.state.uploadedList.map(this.renderTableRow)))
                        }
                    }]), t
                }(b.Component)),
                en = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            uploaded: !1
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function () {
                            return this.props.url ? g.a.createElement(Gt.a, {
                                show: this.props.isOpen,
                                onHide: this.props.onClose,
                                "aria-labelledby": "ModalHeader",
                                className: "modal fade themed in",
                                backdrop: !1,
                                size: "md",
                                keyboard: !0
                            }, g.a.createElement(Gt.a.Header, {
                                closeButton: !0
                            }, g.a.createElement(Gt.a.Title, null, this.props.t("Upload DICOM Files"))), g.a.createElement(Gt.a.Body, null, g.a.createElement($t, {
                                url: this.props.url,
                                retrieveAuthHeaderFunction: this.props.retrieveAuthHeaderFunction
                            }))) : null
                        }
                    }]), t
                }(b.Component),
                tn = Object(w.c)("Common")(en),
                nn = function (e) {
                    return !0 === e.active
                },
                an = Object(W.connect)(function (e) {
                    var t = e.servers.servers.find(nn);
                    return {
                        retrieveAuthHeaderFunction: function () {
                            return l.default.DICOMWeb.getAuthorizationHeader(t)
                        },
                        url: t && t.qidoRoot
                    }
                }, null)(tn),
                rn = new (function () {
                    function e() {
                        Object(r.a)(this, e)
                    }
                    return Object(o.a)(e, [{
                        key: "setAccessToken",
                        value: function (e) {
                            e || console.error("Access token is empty"), this.accessToken = e
                        }
                    }, {
                        key: "doRequest",
                        value: function () {
                            var e = Object(ve.a)(he.a.mark(function e(t) {
                                var n, a, r, o, i, s, c, l = arguments;
                                return he.a.wrap(function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = l.length > 1 && void 0 !== l[1] ? l[1] : {}, a = l.length > 2 && void 0 !== l[2] ? l[2] : {}, r = new URL(t), o = null, r.search = new URLSearchParams(a), e.prev = 5, e.next = 8, fetch(r, Object(y.a)({}, this.fetchConfig, {
                                                config: n
                                            }));
                                        case 8:
                                            return i = e.sent, e.prev = 9, e.next = 12, i.json();
                                        case 12:
                                            o = e.sent, e.next = 17;
                                            break;
                                        case 15:
                                            e.prev = 15, e.t0 = e.catch(9);
                                        case 17:
                                            if (!(i.status >= 200 && i.status < 300 && null != o)) {
                                                e.next = 27;
                                                break
                                            }
                                            if (null == o.nextPageToken) {
                                                e.next = 24;
                                                break
                                            }
                                            return a.pageToken = o.nextPageToken, e.next = 22, this.doRequest(t, n, a);
                                        case 22:
                                            for (c in s = e.sent, o) o.hasOwnProperty(c) && (o[c] = o[c].concat(s.data[c]));
                                        case 24:
                                            return e.abrupt("return", {
                                                isError: !1,
                                                status: i.status,
                                                data: o
                                            });
                                        case 27:
                                            return e.abrupt("return", {
                                                isError: !0,
                                                status: i.status,
                                                message: o && o.error && o.error.message || "Unknown error"
                                            });
                                        case 28:
                                            e.next = 35;
                                            break;
                                        case 30:
                                            if (e.prev = 30, e.t1 = e.catch(5), !o || !o.error) {
                                                e.next = 34;
                                                break
                                            }
                                            return e.abrupt("return", {
                                                isError: !0,
                                                status: e.t1.status,
                                                message: e.t1.response.data.error.message || "Unspecified error"
                                            });
                                        case 34:
                                            return e.abrupt("return", {
                                                isError: !0,
                                                message: e.t1 && e.t1.message || "Oops! Something went wrong"
                                            });
                                        case 35:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                        [5, 30],
                                        [9, 15]
                                    ])
                            }));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "loadProjects",
                        value: function () {
                            var e = Object(ve.a)(he.a.mark(function e() {
                                return he.a.wrap(function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.doRequest("https://cloudresourcemanager.googleapis.com/v1/projects"));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "loadLocations",
                        value: function () {
                            var e = Object(ve.a)(he.a.mark(function e(t) {
                                return he.a.wrap(function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.doRequest("".concat(this.urlBaseProject, "/").concat(t, "/locations")));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "loadDatasets",
                        value: function () {
                            var e = Object(ve.a)(he.a.mark(function e(t, n) {
                                return he.a.wrap(function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.doRequest("".concat(this.urlBaseProject, "/").concat(t, "/locations/").concat(n, "/datasets")));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function (t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "loadDicomStores",
                        value: function () {
                            var e = Object(ve.a)(he.a.mark(function e(t) {
                                return he.a.wrap(function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.doRequest("".concat(this.urlBase, "/").concat(t, "/dicomStores")));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "fetchConfig",
                        get: function () {
                            if (!this.accessToken) throw new Error("OIDC access_token is not set");
                            return {
                                method: "GET",
                                headers: {
                                    Authorization: "Bearer " + this.accessToken
                                }
                            }
                        }
                    }, {
                        key: "urlBase",
                        get: function () {
                            return "https://healthcare.googleapis.com/v1beta1"
                        }
                    }, {
                        key: "urlBaseProject",
                        get: function () {
                            return this.urlBase + "/projects"
                        }
                    }]), e
                }()),
                on = (n(61), function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            search: ""
                        }, n.renderTableRow = function (e) {
                            return g.a.createElement("tr", {
                                key: e.name,
                                className: n.state.highlightedItem === e.name ? "noselect active" : "noselect",
                                onMouseEnter: function () {
                                    n.onHighlightItem(e.name)
                                },
                                onClick: function () {
                                    n.props.onSelect(e)
                                }
                            }, g.a.createElement("td", {
                                className: "project"
                            }, e.name.split("/")[7]))
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "onHighlightItem",
                        value: function (e) {
                            this.setState({
                                highlightedItem: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            if (this.props.error) return g.a.createElement("p", null, this.props.error);
                            var e = g.a.createElement(Y.e, {
                                name: "circle-notch",
                                className: "loading-icon-spin loading-icon"
                            });
                            if (this.props.loading) return e;
                            var t = g.a.createElement("tbody", {
                                id: "StoreList"
                            }, this.props.stores.map(this.renderTableRow));
                            return g.a.createElement("table", {
                                id: "tblStoreList",
                                className: "gcp-table table noselect"
                            }, g.a.createElement("thead", null, g.a.createElement("tr", null, g.a.createElement("th", null, this.props.t("DICOM Store")))), this.props.stores && t)
                        }
                    }]), t
                }(b.Component));
            on.defaultProps = {
                loading: !0
            };
            var sn = Object(w.c)("Common")(on),
                cn = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            error: null,
                            loading: !0,
                            stores: [],
                            locations: []
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = Object(ve.a)(he.a.mark(function e() {
                                var t;
                                return he.a.wrap(function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return rn.setAccessToken(this.props.accessToken), e.next = 3, rn.loadDicomStores(this.props.dataset.name);
                                        case 3:
                                            if (!(t = e.sent).isError) {
                                                e.next = 7;
                                                break
                                            }
                                            return this.setState({
                                                error: t.message
                                            }), e.abrupt("return");
                                        case 7:
                                            this.setState({
                                                stores: t.data.dicomStores || [],
                                                loading: !1
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function () {
                            var e = this.state,
                                t = e.stores,
                                n = e.loading,
                                a = e.error,
                                r = this.props.onSelect;
                            return g.a.createElement(sn, {
                                stores: t,
                                loading: n,
                                error: a,
                                onSelect: r
                            })
                        }
                    }]), t
                }(b.Component),
                ln = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            search: ""
                        }, n.renderTableRow = function (e) {
                            return g.a.createElement("tr", {
                                key: e.name,
                                className: n.state.highlightedItem === e.name ? "noselect active" : "noselect",
                                onMouseEnter: function () {
                                    n.onHighlightItem(e.name)
                                },
                                onClick: function () {
                                    n.props.onSelect(e)
                                }
                            }, g.a.createElement("td", null, e.name.split("/")[5]))
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "onHighlightItem",
                        value: function (e) {
                            this.setState({
                                highlightedItem: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            if (this.props.error) return g.a.createElement("p", null, this.props.error);
                            var e = g.a.createElement(Y.e, {
                                name: "circle-notch",
                                className: "loading-icon-spin loading-icon"
                            });
                            if (this.props.loading) return e;
                            var t = g.a.createElement("tbody", {
                                id: "DatasetList"
                            }, this.props.datasets.map(this.renderTableRow));
                            return g.a.createElement("table", {
                                id: "tblDatasetList",
                                className: "gcp-table table noselect"
                            }, g.a.createElement("thead", null, g.a.createElement("tr", null, g.a.createElement("th", null, this.props.t("Dataset")))), this.props.datasets && t)
                        }
                    }]), t
                }(b.Component);
            ln.defaultProps = {
                loading: !0
            };
            var un = Object(w.c)("Common")(ln),
                pn = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            error: null,
                            loading: !0,
                            datasets: []
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = Object(ve.a)(he.a.mark(function e() {
                                var t;
                                return he.a.wrap(function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return rn.setAccessToken(this.props.accessToken), e.next = 3, rn.loadDatasets(this.props.project.projectId, this.props.location.locationId);
                                        case 3:
                                            if (!(t = e.sent).isError) {
                                                e.next = 7;
                                                break
                                            }
                                            return this.setState({
                                                error: t.message
                                            }), e.abrupt("return");
                                        case 7:
                                            this.setState({
                                                datasets: t.data.datasets || [],
                                                loading: !1
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function () {
                            var e = this.state,
                                t = e.datasets,
                                n = e.loading,
                                a = e.error,
                                r = this.props.onSelect;
                            return g.a.createElement(un, {
                                datasets: t,
                                loading: n,
                                error: a,
                                onSelect: r
                            })
                        }
                    }]), t
                }(b.Component),
                dn = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            search: "",
                            highlightedItem: null
                        }, n.renderTableRow = function (e) {
                            return g.a.createElement("tr", {
                                key: e.projectId,
                                className: n.state.highlightedItem === e.projectId ? "noselect active" : "noselect",
                                onMouseEnter: function () {
                                    n.onHighlightItem(e.projectId)
                                },
                                onClick: function () {
                                    n.onHighlightItem(e.projectId), n.props.onSelect(e)
                                }
                            }, g.a.createElement("td", null, e.name), g.a.createElement("td", null, e.projectId))
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "onHighlightItem",
                        value: function (e) {
                            this.setState({
                                highlightedItem: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            if (this.props.error) return g.a.createElement("p", null, this.props.error);
                            var e = g.a.createElement(Y.e, {
                                name: "circle-notch",
                                className: "loading-icon-spin loading-icon"
                            });
                            if (this.props.loading) return e;
                            var t = g.a.createElement("tbody", {
                                id: "ProjectList"
                            }, this.props.projects.map(this.renderTableRow));
                            return g.a.createElement("table", {
                                id: "tblProjectList",
                                className: "gcp-table table noselect"
                            }, g.a.createElement("thead", null, g.a.createElement("tr", null, g.a.createElement("th", null, this.props.t("Project")), g.a.createElement("th", null, this.props.t("ID")))), this.props.projects && t)
                        }
                    }]), t
                }(b.Component);
            dn.defaultProps = {
                loading: !0
            };
            var mn = Object(w.c)("Common")(dn),
                fn = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            error: null,
                            loading: !0,
                            projects: []
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = Object(ve.a)(he.a.mark(function e() {
                                var t;
                                return he.a.wrap(function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return rn.setAccessToken(this.props.accessToken), e.next = 3, rn.loadProjects();
                                        case 3:
                                            if (!(t = e.sent).isError) {
                                                e.next = 7;
                                                break
                                            }
                                            return this.setState({
                                                error: t.message
                                            }), e.abrupt("return");
                                        case 7:
                                            this.setState({
                                                projects: t.data.projects || [],
                                                loading: !1
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function () {
                            var e = this.state,
                                t = e.projects,
                                n = e.loading,
                                a = e.error,
                                r = this.props.onSelect;
                            return g.a.createElement(mn, {
                                projects: t,
                                loading: n,
                                error: a,
                                onSelect: r
                            })
                        }
                    }]), t
                }(b.Component),
                hn = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            search: ""
                        }, n.renderTableRow = function (e) {
                            return g.a.createElement("tr", {
                                key: e.locationId,
                                className: n.state.highlightedItem === e.locationId ? "noselect active" : "noselect",
                                onMouseEnter: function () {
                                    n.onHighlightItem(e.locationId)
                                },
                                onClick: function () {
                                    n.props.onSelect(e)
                                }
                            }, g.a.createElement("td", null, e.name.split("/")[3]))
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "onHighlightItem",
                        value: function (e) {
                            this.setState({
                                highlightedItem: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            if (this.props.error) return g.a.createElement("p", null, this.props.error);
                            var e = g.a.createElement(Y.e, {
                                name: "circle-notch",
                                className: "loading-icon-spin loading-icon"
                            });
                            if (this.props.loading) return e;
                            var t = g.a.createElement("tbody", {
                                id: "LocationList"
                            }, this.props.locations.map(this.renderTableRow));
                            return g.a.createElement("table", {
                                id: "tblLocationList",
                                className: "gcp-table table noselect"
                            }, g.a.createElement("thead", null, g.a.createElement("tr", null, g.a.createElement("th", null, this.props.t("Location")))), this.props.locations && t)
                        }
                    }]), t
                }(b.Component);
            hn.defaultProps = {
                loading: !0
            };
            var vn = Object(w.c)("Common")(hn),
                bn = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            error: null,
                            loading: !0,
                            locations: []
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = Object(ve.a)(he.a.mark(function e() {
                                var t;
                                return he.a.wrap(function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return rn.setAccessToken(this.props.accessToken), e.next = 3, rn.loadLocations(this.props.project.projectId);
                                        case 3:
                                            if (!(t = e.sent).isError) {
                                                e.next = 7;
                                                break
                                            }
                                            return this.setState({
                                                error: t.message
                                            }), e.abrupt("return");
                                        case 7:
                                            this.setState({
                                                locations: t.data.locations || [],
                                                loading: !1
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function () {
                            var e = this.state,
                                t = e.locations,
                                n = e.loading,
                                a = e.error,
                                r = this.props.onSelect;
                            return g.a.createElement(vn, {
                                locations: t,
                                loading: n,
                                error: a,
                                onSelect: r
                            })
                        }
                    }]), t
                }(b.Component),
                gn = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            project: null,
                            location: null,
                            dataset: null,
                            unloading: !1
                        }, n.onProjectSelect = function (e) {
                            n.setState({
                                project: e
                            })
                        }, n.onLocationSelect = function (e) {
                            n.setState({
                                location: e
                            })
                        }, n.onDatasetSelect = function (e) {
                            n.setState({
                                dataset: e
                            })
                        }, n.onProjectClick = function () {
                            n.setState({
                                dataset: null,
                                location: null,
                                project: null
                            })
                        }, n.onLocationClick = function () {
                            n.setState({
                                dataset: null,
                                location: null
                            })
                        }, n.onDatasetClick = function () {
                            n.setState({
                                dataset: null
                            })
                        }, n.onDicomStoreSelect = function (e) {
                            var t = e.name,
                                a = t.split("/"),
                                r = {
                                    wadoUriRoot: rn.urlBase + "/".concat(t, "/dicomWeb"),
                                    qidoRoot: rn.urlBase + "/".concat(t, "/dicomWeb"),
                                    wadoRoot: rn.urlBase + "/".concat(t, "/dicomWeb"),
                                    project: a[1],
                                    location: a[3],
                                    dataset: a[5],
                                    dicomStore: a[7]
                                };
                            n.props.setServers(r)
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function () {
                            var e = this.props.user.access_token,
                                t = this.state,
                                n = t.project,
                                a = t.location,
                                r = t.dataset,
                                o = this.onProjectClick,
                                i = this.onLocationClick,
                                s = this.onDatasetClick,
                                c = this.onProjectSelect,
                                l = this.onLocationSelect,
                                u = this.onDatasetSelect,
                                p = this.onDicomStoreSelect,
                                d = g.a.createElement("div", {
                                    className: "gcp-picker--path"
                                }, g.a.createElement("span", null, this.props.t("Select a Project")));
                            return n && (d = g.a.createElement("div", {
                                className: "gcp-picker--path"
                            }, g.a.createElement("span", {
                                onClick: o
                            }, n.name), n && a && g.a.createElement("span", {
                                onClick: i
                            }, " ", "-> ", a.name.split("/")[3]), n && a && r && g.a.createElement("span", {
                                onClick: s
                            }, " ", "-> ", r.name.split("/")[5]))), g.a.createElement(g.a.Fragment, null, d, !n && g.a.createElement(fn, {
                                accessToken: e,
                                onSelect: c
                            }), n && !a && g.a.createElement(bn, {
                                accessToken: e,
                                project: n,
                                onSelect: l
                            }), n && a && !r && g.a.createElement(pn, {
                                accessToken: e,
                                project: n,
                                location: a,
                                onSelect: u
                            }), n && a && r && g.a.createElement(cn, {
                                accessToken: e,
                                dataset: r,
                                onSelect: p
                            }))
                        }
                    }]), t
                }(b.Component),
                yn = Object(w.c)("Common")(gn),
                En = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).handleEvent = function (e) {
                            var t = [{
                                name: e.dicomStore,
                                imageRendering: "wadors",
                                thumbnailRendering: "wadors",
                                qidoSupportsIncludeField: !1,
                                type: "dicomWeb",
                                qidoRoot: e.qidoRoot,
                                wadoRoot: e.wadoRoot,
                                wadoUriRoot: e.wadoUriRoot,
                                active: !0,
                                supportsFuzzyMatching: !1
                            }];
                            n.props.setServers(t)
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function () {
                            return g.a.createElement(Gt.a, {
                                show: this.props.isOpen,
                                onHide: this.props.onClose,
                                "aria-labelledby": "ModalHeader",
                                className: "modal fade themed in",
                                backdrop: !1,
                                size: "md",
                                keyboard: !0
                            }, g.a.createElement(Gt.a.Header, {
                                closeButton: !0
                            }, g.a.createElement(Gt.a.Title, null, this.props.t("Google Cloud Healthcare API"))), g.a.createElement(Gt.a.Body, null, g.a.createElement(yn, {
                                setServers: this.handleEvent,
                                user: this.props.user,
                                url: this.props.url
                            })))
                        }
                    }]), t
                }(b.Component);
            En.defaultProps = {
                isOpen: !1
            };
            var Sn = Object(w.c)("Common")(En),
                On = function (e) {
                    return !0 === e.active
                },
                wn = Object(W.connect)(function (e) {
                    var t = e.servers.servers.find(On);
                    return {
                        user: e.oidc && e.oidc.user,
                        url: t && t.qidoRoot
                    }
                }, function (e) {
                    return {
                        setServers: function (t) {
                            e({
                                type: "SET_SERVERS",
                                servers: t
                            })
                        }
                    }
                })(Sn),
                kn = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            searchData: {},
                            studies: [],
                            error: null,
                            modalComponentId: null
                        }, n.searchForStudies = function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.defaultSearchData,
                                a = n.props.server,
                                r = {
                                    patientId: e.patientId,
                                    patientName: e.patientName,
                                    accessionNumber: e.accessionNumber,
                                    studyDescription: e.studyDescription,
                                    modalitiesInStudy: e.modalities,
                                    studyDateFrom: e.studyDateFrom,
                                    studyDateTo: e.studyDateTo,
                                    limit: e.rowsPerPage,
                                    offset: e.currentPage * e.rowsPerPage
                                };
                            a.supportsFuzzyMatching && (r.fuzzymatching = !0), l.default.studies.searchStudies(a, r).then(function (t) {
                                t || (t = []);
                                var a = e.sortData,
                                    r = a.field,
                                    o = a.order,
                                    i = t.map(function (e) {
                                        return G()(e.studyDate, "MMM DD, YYYY", !0).isValid() || (e.studyDate = G()(e.studyDate, "YYYYMMDD").format("MMM DD, YYYY")), e
                                    });
                                i.sort(function (e, t) {
                                    var n = e[r],
                                        a = t[r];
                                    return "studyDate" === r && (n = G()(n).toISOString(), a = G()(a).toISOString()), "desc" === o ? n < a ? -1 : n > a ? 1 : 0 : n > a ? -1 : n < a ? 1 : 0
                                }), n.setState({
                                    studies: i
                                })
                            }).catch(function (e) {
                                throw n.setState({
                                    error: !0
                                }), new Error(e)
                            })
                        }, n.onImport = function () {
                            n.openModal("DicomFilesUploader")
                        }, n.openModal = function (e) {
                            n.setState({
                                modalComponentId: e
                            })
                        }, n.closeModal = function () {
                            n.setState({
                                modalComponentId: null
                            })
                        }, n.onSelectItem = function (e) {
                            n.props.history.push("/viewer/".concat(e))
                        }, n.onSearch = function (e) {
                            n.searchForStudies(e)
                        }, n.closeModals = function () {
                            n.setState({
                                modalComponentId: null
                            })
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            !this.props.server && window.config.enableGoogleCloudAdapter ? this.setState({
                                modalComponentId: "DicomStorePicker"
                            }) : this.searchForStudies(Object(y.a)({}, t.defaultSearchData, this.props.filters || {}))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (e) {
                            this.state.searchData || this.state.studies || this.searchForStudies(), this.props.server !== e.server && this.setState({
                                modalComponentId: null,
                                searchData: null,
                                studies: null
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                n = function () {
                                    var t = Object(ve.a)(he.a.mark(function t(n) {
                                        var a;
                                        return he.a.wrap(function (t) {
                                            for (; ;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.prev = 0, t.next = 3, Rt(n);
                                                case 3:
                                                    a = t.sent, e.setState({
                                                        studies: a
                                                    }), t.next = 10;
                                                    break;
                                                case 7:
                                                    t.prev = 7, t.t0 = t.catch(0), e.setState({
                                                        error: t.t0
                                                    });
                                                case 10:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }, t, null, [
                                                [0, 7]
                                            ])
                                    }));
                                    return function (e) {
                                        return t.apply(this, arguments)
                                    }
                                }();
                            if (this.state.error) return g.a.createElement("div", null, "Error: ", JSON.stringify(this.state.error));
                            if (null === this.state.studies && !this.state.modalComponentId) return g.a.createElement("div", null, "Loading...");
                            var a = null,
                                r = null;
                            window.config.enableGoogleCloudAdapter && (r = g.a.createElement(wn, {
                                isOpen: "DicomStorePicker" === this.state.modalComponentId,
                                onClose: this.closeModals
                            }), a = g.a.createElement("div", {
                                className: "form-inline btn-group pull-right",
                                style: {
                                    padding: "20px"
                                }
                            }, g.a.createElement("button", {
                                className: "btn btn-primary",
                                onClick: function () {
                                    return e.openModal("DicomStorePicker")
                                }
                            }, this.props.t("Change DICOM Store"))));
                            var o = g.a.createElement("div", {
                                className: "paginationArea"
                            }, this.state.studies ? g.a.createElement(Y.l, {
                                studies: this.state.studies,
                                studyListFunctionsEnabled: this.props.studyListFunctionsEnabled,
                                onImport: this.onImport,
                                onSelectItem: this.onSelectItem,
                                pageSize: this.rowsPerPage,
                                defaultSort: t.defaultSort,
                                studyListDateFilterNumDays: t.studyListDateFilterNumDays,
                                onSearch: this.onSearch
                            }, this.props.studyListFunctionsEnabled ? g.a.createElement(an, {
                                isOpen: "DicomFilesUploader" === this.state.modalComponentId,
                                onClose: this.closeModals
                            }) : null, a, r) : g.a.createElement(Pt.a, {
                                onDrop: n
                            }, function (t) {
                                var n = t.getRootProps,
                                    a = t.getInputProps;
                                return g.a.createElement("div", Object.assign({}, n(), {
                                    className: "drag-drop-instructions"
                                }), g.a.createElement("h3", null, e.props.t("Drag and Drop DICOM files here to load them in the Viewer")), g.a.createElement("h4", null, e.props.t("Or click to load the browser's file selector")), g.a.createElement("input", Object.assign({}, a(), {
                                    style: {
                                        display: "none"
                                    }
                                })))
                            }));
                            return g.a.createElement(g.a.Fragment, null, g.a.createElement(Se.Consumer, null, function (t) {
                                return g.a.createElement(gt.Consumer, null, function (n) {
                                    return g.a.createElement(De, {
                                        home: !0,
                                        user: e.props.user,
                                        userManager: n
                                    }, t.logoComponent)
                                })
                            }), o)
                        }
                    }]), t
                }(b.Component);
            kn.defaultProps = {
                studyListFunctionsEnabled: !0
            }, kn.rowsPerPage = 25, kn.defaultSort = {
                field: "patientName",
                order: "desc"
            }, kn.studyListDateFilterNumDays = 25e3, kn.defaultStudyDateFrom = G()().subtract(kn.studyListDateFilterNumDays, "days").toDate(), kn.defaultStudyDateTo = new Date, kn.defaultSearchData = {
                currentPage: 0,
                rowsPerPage: kn.rowsPerPage,
                studyDateFrom: kn.defaultStudyDateFrom,
                studyDateTo: kn.defaultStudyDateTo,
                sortData: kn.defaultSort
            };
            var Dn = Object(le.f)(Object(w.c)("Common")(kn)),
                jn = function (e) {
                    return !0 === e.active
                },
                Cn = Object(W.connect)(function (e) {
                    return {
                        server: e.servers.servers.find(jn),
                        user: e.oidc.user
                    }
                }, null)(Dn);
            var In = Object(le.f)(function (e) {
                var t = e.location,
                    n = t ? function (e) {
                        var t = e.search,
                            n = me.a.parse(t),
                            a = {};
                        return Object.entries(n).forEach(function (e) {
                            var t, n = Object(Yt.a)(e, 2),
                                r = n[0],
                                o = n[1];
                            a[(t = r, t[0].toLowerCase() + t.slice(1))] = o
                        }), a
                    }(t) : void 0,
                    a = !1;
                return window.config && window.config.studyListFunctionsEnabled && (a = window.config.studyListFunctionsEnabled), g.a.createElement(Cn, {
                    filters: n,
                    studyListFunctionsEnabled: a
                })
            }),
                Tn = n(243),
                xn = n.n(Tn),
                Mn = l.metadata.OHIFStudyMetadata,
                Ln = l.studies.retrieveStudiesMetadata,
                Nn = l.utils.studyMetadataManager,
                Pn = l.utils.updateMetaDataManager,
                An = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            studies: null,
                            error: null
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = Object(ve.a)(he.a.mark(function e() {
                                var n, a, r, o;
                                return he.a.wrap(function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, n = (n = this.props.location.search).slice(1, n.length), a = xn.a.parse(n), e.next = 6, t.parseQueryAndFetchStudies(a);
                                        case 6:
                                            r = e.sent, Nn.purge(), o = r.map(function (e) {
                                                var t = new Mn(e, e.studyInstanceUid),
                                                    n = na.modules.sopClassHandlerModule;
                                                return e.displaySets = e.displaySets || t.createDisplaySets(n), t.setDisplaySets(e.displaySets), Pn(e), Nn.add(t), e
                                            }), this.setState({
                                                studies: o
                                            }), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(0), this.setState({
                                                error: e.t0
                                            });
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                        [0, 12]
                                    ])
                            }));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function () {
                            return this.state.error ? g.a.createElement("div", null, "Error: ", JSON.stringify(this.state.error)) : this.state.studies ? g.a.createElement(yt, {
                                studies: this.state.studies
                            }) : g.a.createElement("div", null, "Loading...")
                        }
                    }], [{
                        key: "parseQueryAndFetchStudies",
                        value: function (e) {
                            return new Promise(function (t, n) {
                                var a = e.url;
                                a || n(new Error("No URL was specified. Use ?url=$yourURL"));
                                var r = new XMLHttpRequest;
                                r.addEventListener("error", function (e) {
                                    l.log.warn("An error occurred while retrieving the JSON data"), n(e)
                                }), r.addEventListener("load", function () {
                                    r.responseText || (l.log.warn("Response was undefined"), n(new Error("Response was undefined"))), l.log.info(JSON.stringify(r.responseText, null, 2));
                                    var a = JSON.parse(r.responseText);
                                    if (a.servers && e.studyInstanceUids) {
                                        var o = a.servers.dicomWeb[0];
                                        o.type = "dicomWeb";
                                        var i = e.studyInstanceUids.split(";");
                                        Ln(o, i, []).then(function (e) {
                                            t(e)
                                        }, function (e) {
                                            n(e)
                                        })
                                    } else t(a.studies)
                                }), l.log.info("Sending Request to: ".concat(a)), r.open("GET", a), r.setRequestHeader("Accept", "application/json"), r.send()
                            })
                        }
                    }]), t
                }(b.Component),
                Un = function (e) {
                    function t() {
                        return Object(r.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function () {
                            var e = this;
                            return g.a.createElement(E.CallbackComponent, {
                                userManager: this.props.userManager,
                                successCallback: function () {
                                    var t = sessionStorage.getItem("ohif-redirect-to");
                                    e.props.history.push(t)
                                },
                                errorCallback: function (e) {
                                    throw new Error(e)
                                }
                            }, g.a.createElement("div", null, "Redirecting..."))
                        }
                    }]), t
                }(b.Component),
                Rn = Object(le.f)(Un);
            n(542);

            function Fn() {
                return g.a.createElement("div", {
                    className: "not-found"
                }, g.a.createElement("div", null, g.a.createElement("h4", null, "Sorry, this page does not exist."), g.a.createElement("h5", null, g.a.createElement(Oe.b, {
                    to: "/"
                }, "Go back to the Study List"))))
            }
            var Bn = function (e) {
                var t = e.progress,
                    n = e.animationDuration;
                return g.a.createElement("div", {
                    style: {
                        background: "#29d",
                        height: 2,
                        left: 0,
                        marginLeft: "".concat(100 * (-1 + t), "%"),
                        position: "fixed",
                        top: 0,
                        transition: "margin-left ".concat(n, "ms linear"),
                        width: "100%",
                        zIndex: 1031
                    }
                }, g.a.createElement("div", {
                    style: {
                        boxShadow: "0 0 10px #29d, 0 0 5px #29d",
                        display: "block",
                        height: "100%",
                        opacity: 1,
                        position: "absolute",
                        right: 0,
                        transform: "rotate(3deg) translate(0px, -4px)",
                        width: 100
                    }
                }))
            },
                Vn = function (e) {
                    var t = e.children,
                        n = e.isFinished,
                        a = e.animationDuration;
                    return g.a.createElement("div", {
                        style: {
                            opacity: n ? 0 : 1,
                            pointerEvents: "none",
                            transition: "opacity ".concat(a, "ms linear")
                        }
                    }, t)
                },
                Hn = (n(543), n(544), n(545), function () {
                    return window.location.reload()
                }),
                _n = function (e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return (n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            isLoading: !1
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this;
                            this.unlisten = this.props.history.listen(function (t, n) {
                                e.props.setContext && e.props.setContext(window.location.pathname)
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            this.unlisten()
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.props,
                                n = t.user,
                                a = t.userManager;
                            if (a && (!n || n.expired)) {
                                var r = this.props.location.pathname;
                                return "/callback" !== r && sessionStorage.setItem("ohif-redirect-to", r), g.a.createElement(le.c, null, g.a.createElement(le.a, {
                                    exact: !0,
                                    path: "/silent-refresh.html",
                                    onEnter: Hn
                                }), g.a.createElement(le.a, {
                                    exact: !0,
                                    path: "/logout-redirect",
                                    render: function () {
                                        return g.a.createElement(E.SignoutCallbackComponent, {
                                            userManager: a,
                                            successCallback: function () {
                                                return console.log("Signout successful")
                                            },
                                            errorCallback: function (e) {
                                                console.warn(e), console.warn("Signout failed")
                                            }
                                        })
                                    }
                                }), g.a.createElement(le.a, {
                                    path: "/callback",
                                    render: function () {
                                        return g.a.createElement(Rn, {
                                            userManager: a
                                        })
                                    }
                                }), g.a.createElement(le.a, {
                                    component: function () {
                                        return a.getUser().then(function (e) {
                                            e ? a.signinSilent() : a.signinRedirect()
                                        }), null
                                    }
                                }))
                            }
                            var o = [{
                                path: "/local",
                                Component: Wt
                            }, {
                                path: "/viewer",
                                Component: An
                            }, {
                                path: "/viewer/:studyInstanceUids",
                                Component: Nt
                            }, {
                                path: "/study/:studyInstanceUids/series/:seriesInstanceUids",
                                Component: Nt
                            }, {
                                path: "/IHEInvokeImageDisplay",
                                Component: Lt
                            }];
                            (!window.config || void 0 === window.config.showStudyList || window.config.showStudyList) && (o.push({
                                path: "/studylist",
                                Component: In
                            }), o.push({
                                path: "/",
                                Component: In
                            }));
                            var i = this.props.location.pathname,
                                s = !o.find(function (e) {
                                    return Object(le.e)(i, {
                                        path: e.path,
                                        exact: !0
                                    })
                                });
                            return g.a.createElement(g.a.Fragment, null, g.a.createElement(ue.a, {
                                isAnimating: this.state.isLoading
                            }, function (e) {
                                var t = e.isFinished,
                                    n = e.progress,
                                    a = e.animationDuration;
                                return g.a.createElement(Vn, {
                                    isFinished: t,
                                    animationDuration: a
                                }, g.a.createElement(Bn, {
                                    progress: n,
                                    animationDuration: a
                                }))
                            }), g.a.createElement(le.a, {
                                exact: !0,
                                path: "/silent-refresh.html",
                                onEnter: Hn
                            }), g.a.createElement(le.a, {
                                exact: !0,
                                path: "/logout-redirect.html",
                                onEnter: Hn
                            }), !s && o.map(function (t) {
                                var n = t.path,
                                    a = t.Component;
                                return g.a.createElement(le.a, {
                                    key: n,
                                    exact: !0,
                                    path: n
                                }, function (t) {
                                    var n = t.match;
                                    return g.a.createElement(pe.a, {
                                        in: null !== n, timeout: 300, classNames: "fade", unmountOnExit: !0, onEnter: function () {
                                            e.setState({
                                                isLoading: !0
                                            })
                                        }, onEntered: function () {
                                            e.setState({
                                                isLoading: !1
                                            })
                                        }
                                    }, null === n ? g.a.createElement(g.a.Fragment, null) : g.a.createElement(a, {
                                        match: n,
                                        location: e.props.location
                                    }))
                                })
                            }), s && g.a.createElement(Fn, null))
                        }
                    }]), t
                }(b.Component),
                Wn = Object(W.connect)(function (e) {
                    return {
                        user: e.oidc.user
                    }
                }, null)(_n),
                Yn = Object(Y.n)(Object(le.f)(Wn)),
                zn = n(244),
                Gn = n.n(zn),
                qn = n(133);
            var Jn = function (e) {
                return {
                    type: "RESET_LABELLING_AND_CONTEXT_MENU",
                    state: e
                }
            },
                Xn = function (e, t) {
                    return {
                        type: "SET_TOOL_CONTEXT_MENU_DATA",
                        viewportIndex: e,
                        toolContextMenuData: t
                    }
                };

            function Kn(e) {
                var t = function (t) {
                    return function () {
                        e.dispatch(Xn(t, {
                            visible: !1
                        }))
                    }
                };
                return function (n) {
                    var a = n.detail,
                        r = parseInt(a.element.dataset.viewportIndex, 10);
                    ! function (t, n) {
                        e.dispatch(Jn()), e.dispatch(Xn(t, n))
                    }(r, {
                        eventData: a,
                        isTouchEvent: !1,
                        onClose: t(r)
                    })
                }
            }

            function Qn(e) {
                var t = function (t) {
                    return function () {
                        e.dispatch(Xn(t, {
                            visible: !1
                        }))
                    }
                };
                return function (n) {
                    var a = n.detail,
                        r = parseInt(a.element.dataset.viewportIndex, 10);
                    ! function (t, n) {
                        e.dispatch(Jn()), e.dispatch(Xn(t, n))
                    }(r, {
                        eventData: a,
                        isTouchEvent: !0,
                        onClose: t(r)
                    })
                }
            }

            function Zn(e) {
                return function () {
                    e.dispatch(Jn())
                }
            } ! function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                window.cornerstoneTools = T.a, T.a.external.cornerstone = p.a, T.a.external.Hammer = D.a, T.a.external.cornerstoneMath = C.a, T.a.init(e);
                T.a.textStyle.setFont("16px ".concat("Roboto, OpenSans, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif")), T.a.toolStyle.setToolWidth(2), T.a.toolColors.setToolColor("rgb(255, 255, 0)"), T.a.toolColors.setActiveColor("rgb(0, 255, 0)"), T.a.store.state.touchProximity = 40
            }({
                globalToolSyncEnabled: !0,
                showSVGCursors: !0
            });
            var $n = {
                getAppState: function () {
                    return F.getState()
                },
                getActiveContexts: function () {
                    return We(F.getState())
                }
            },
                ea = new l.CommandsManager($n),
                ta = new l.HotkeysManager(ea),
                na = new l.ExtensionManager({
                    commandsManager: ea
                });

            function aa(e, t) {
                return function (e) {
                    return e.includes("http://") || e.includes("https://")
                }(e) ? e : ("/" === t[t.length - 1] && (t = t.slice(0, t.length - 1)), t + e)
            } ! function (e) {
                var t = function (e) {
                    var t = function (t) {
                        e.dispatch(function (e) {
                            return {
                                type: "SET_LABELLING_FLOW_DATA",
                                labellingFlowData: e
                            }
                        }(t))
                    };
                    return function (e, n, a) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            o = {
                                visible: !0,
                                eventData: n,
                                measurementData: e,
                                skipAddLabelButton: r.skipAddLabelButton,
                                editLocation: r.editLocation,
                                editDescription: r.editDescription,
                                editResponse: r.editResponse,
                                editDescriptionOnDialog: r.editDescriptionOnDialog,
                                labellingDoneCallback: function () {
                                    t({
                                        visible: !1
                                    })
                                },
                                updateLabelling: function (t) {
                                    var n = t.location,
                                        a = t.response,
                                        r = t.description;
                                    n && (e.location = n), r && (e.description = r), a && (e.response = a), X(e)
                                }
                            };
                        t(o)
                    }
                }(e),
                    n = [{
                        name: "Pan",
                        mouseButtonMasks: [1, 4]
                    }, {
                        name: "Zoom",
                        mouseButtonMasks: [1, 2]
                    }, {
                        name: "Wwwc",
                        mouseButtonMasks: [1]
                    }, {
                        name: "Magnify",
                        mouseButtonMasks: [1]
                    }, {
                        name: "WwwcRegion",
                        mouseButtonMasks: [1]
                    }, {
                        name: "Bidirectional",
                        props: {
                            configuration: {
                                getMeasurementLocationCallback: t
                            }
                        },
                        mouseButtonMasks: [1]
                    }, {
                        name: "Length",
                        props: {
                            configuration: {
                                getMeasurementLocationCallback: t
                            }
                        },
                        mouseButtonMasks: [1]
                    }, {
                        name: "Angle",
                        props: {
                            configuration: {
                                getMeasurementLocationCallback: t
                            }
                        },
                        mouseButtonMasks: [1]
                    }, {
                        name: "StackScroll",
                        mouseButtonMasks: [1]
                    }, {
                        name: "Brush",
                        mouseButtonMasks: [1]
                    }, {
                        name: "FreehandMouse",
                        props: {
                            configuration: {
                                getMeasurementLocationCallback: t
                            }
                        },
                        mouseButtonMasks: [1]
                    }, {
                        name: "EllipticalRoi",
                        props: {
                            configuration: {
                                getMeasurementLocationCallback: t
                            }
                        },
                        mouseButtonMasks: [1]
                    }, {
                        name: "CircleRoi",
                        props: {
                            configuration: {
                                getMeasurementLocationCallback: t
                            }
                        },
                        mouseButtonMasks: [1]
                    }, {
                        name: "RectangleRoi",
                        props: {
                            configuration: {
                                getMeasurementLocationCallback: t
                            }
                        },
                        mouseButtonMasks: [1]
                    }, {
                        name: "DragProbe",
                        mouseButtonMasks: [1]
                    }, {
                        name: "PanMultiTouch"
                    }, {
                        name: "ZoomTouchPinch"
                    }, {
                        name: "StackScrollMouseWheel"
                    }, {
                        name: "StackScrollMultiTouch"
                    }, {
                        name: "Eraser"
                    }, {
                        name: "ArrowAnnotate",
                        props: {
                            configuration: {
                                getMeasurementLocationCallback: t
                            }
                        }
                    }],
                    a = Kn(e),
                    r = Qn(e),
                    o = Zn(e),
                    i = Zn(e),
                    s = Zn(e),
                    c = l.default.redux.actions.setExtensionData("cornerstone", {
                        availableTools: n,
                        onNewImage: o,
                        onRightClick: a,
                        onTouchPress: r,
                        onTouchStart: s,
                        onMouseClick: i
                    });
                e.dispatch(c)
            }(F), na.registerExtensions([_, re, oe.a, Gn.a, ce.a, ie.a, se.a]), window.config && window.config.hotkeys && ta.setHotkeys(window.config.hotkeys, !0), window.store = F;
            var ra = function (e) {
                function t(e) {
                    var n, a;
                    if (Object(r.a)(this, t), (n = Object(i.a)(this, Object(s.a)(t).call(this, e))).props.oidc.length) {
                        var o = n.props.oidc[0],
                            c = window.location,
                            u = c.protocol,
                            p = c.host,
                            d = n.props.routerBasename,
                            f = "".concat(u, "//").concat(p).concat(d),
                            h = o.redirect_uri || "/callback",
                            v = o.silent_redirect_uri || "/silent-refresh.html",
                            b = o.post_logout_redirect_uri || "/",
                            g = Object.assign({}, o, {
                                redirect_uri: aa(h, f),
                                silent_redirect_uri: aa(v, f),
                                post_logout_redirect_uri: aa(b, f)
                            });
                        n.userManager = O(F, g)
                    }
                    return (a = n.props.servers) && l.utils.addServers(a, F),
                        function () {
                            var e = {
                                maxWebWorkers: Math.max(navigator.hardwareConcurrency - 1, 1),
                                startWebWorkersOnDemand: !0,
                                taskConfiguration: {
                                    decodeTask: {
                                        initializeCodecsOnStartup: !1,
                                        usePDFJS: !1,
                                        strict: !1
                                    }
                                }
                            };
                            m.a.webWorkerManager.initialize(e)
                        }(), n
                }
                return Object(c.a)(t, e), Object(o.a)(t, [{
                    key: "render",
                    value: function () {
                        var e = this.userManager;
                        return e ? g.a.createElement(W.Provider, {
                            store: F
                        }, g.a.createElement(w.a, {
                            i18n: qn.default
                        }, g.a.createElement(E.OidcProvider, {
                            store: F,
                            userManager: e
                        }, g.a.createElement(gt.Provider, {
                            value: e
                        }, g.a.createElement(Oe.a, {
                            basename: this.props.routerBasename
                        }, g.a.createElement(Se.Provider, {
                            value: this.props.whiteLabelling
                        }, g.a.createElement(Yn, {
                            userManager: e
                        }))))))) : g.a.createElement(W.Provider, {
                            store: F
                        }, g.a.createElement(w.a, {
                            i18n: qn.default
                        }, g.a.createElement(Oe.a, {
                            basename: this.props.routerBasename
                        }, g.a.createElement(Se.Provider, {
                            value: this.props.whiteLabelling
                        }, g.a.createElement(Yn, null)))))
                    }
                }]), t
            }(b.Component);
            ra.defaultProps = {
                whiteLabelling: {},
                oidc: []
            };
            var oa = ra,
                ia = n(19),
                sa = n.n(ia);
            n.d(t, "App", function () {
                return oa
            }), window.config = window.config || {};
            var ca = Object.assign({}, {
                routerBasename: "/"
            }, window.config),
                la = g.a.createElement(oa, ca, null);
            sa.a.render(la, document.getElementById("root"))
        },
        61: function (e, t, n) { }
    },
    [
        [250, 1, 2]
    ]
]);
//# sourceMappingURL=main.bb8e65b6.chunk.js.map