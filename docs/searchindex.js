Search.setIndex({"docnames": ["design", "design/element", "design/material", "design/node", "design/plotter", "design/solver", "design/system", "implementation", "implementation/DOF_class", "implementation/Element_class", "implementation/FiberMaterial", "implementation/LinearSolver_class", "implementation/LinearTriangle_class", "implementation/Material_class", "implementation/Node_class", "implementation/PlaneStrain", "implementation/PlaneStress", "implementation/Plotter_class", "implementation/Solver_class", "implementation/System_class", "implementation/Truss_class", "index"], "filenames": ["design.rst", "design/element.rst", "design/material.rst", "design/node.rst", "design/plotter.rst", "design/solver.rst", "design/system.rst", "implementation.rst", "implementation/DOF_class.rst", "implementation/Element_class.rst", "implementation/FiberMaterial.rst", "implementation/LinearSolver_class.rst", "implementation/LinearTriangle_class.rst", "implementation/Material_class.rst", "implementation/Node_class.rst", "implementation/PlaneStrain.rst", "implementation/PlaneStress.rst", "implementation/Plotter_class.rst", "implementation/Solver_class.rst", "implementation/System_class.rst", "implementation/Truss_class.rst", "index.rst"], "titles": ["Program Design", "Element", "Material", "Node", "Plotter", "Solver", "System", "Implementation", "DoF class", "Element classes", "FiberMaterial material class", "Linear Solver class", "LinearTriangle class", "Material classes", "Node class", "PlaneStrain material class", "PlaneStress material class", "Plotter class", "Solver class", "System class", "Truss class", "Welcome to the FEM.edu documentation!"], "terms": {"The": [0, 4], "goal": 0, "i": [0, 2, 3, 4, 5, 17, 18], "creat": [0, 4, 5, 6, 17], "an": [0, 1, 5, 6, 18], "object": [0, 1, 4, 5, 6, 17, 19], "orient": 0, "finit": 0, "element": [0, 4, 5, 6, 7, 12, 14, 19, 20, 21], "analysi": 0, "base": [0, 4, 19], "method": 0, "handl": [0, 6], "arbitrari": 0, "truss": [0, 1, 6, 7, 9, 12], "2d": [0, 15, 16], "allow": 0, "load": [0, 3, 5, 6, 19], "can": 0, "plot": [0, 4, 5, 6, 17, 19], "its": [0, 1], "undeform": [0, 4], "deform": [0, 3, 4, 14, 17, 19], "shape": [0, 4], "need": [0, 1, 3, 4, 18], "us": [0, 1, 5, 17], "follow": 0, "node": [0, 1, 4, 5, 6, 7, 9, 19, 21], "materi": [0, 1, 7, 9, 12, 20, 21], "system": [0, 3, 4, 7, 11, 17, 21], "solver": [0, 6, 7, 21], "plotter": [0, 5, 6, 7, 21], "each": [1, 3, 4, 5], "instanc": [1, 3, 5, 6], "repres": [1, 3, 4, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20], "one": [1, 3, 5, 6], "member": 1, "input": [1, 2, 3, 4, 5, 6], "return": [1, 2, 3, 4, 5, 6, 9, 10, 13, 14, 15, 16, 18, 20], "descript": [1, 2, 3, 4, 5, 6, 14], "__init__": [1, 2, 3, 4, 5, 6], "nd0": 1, "nd1": 1, "two": [1, 3, 4], "constructor": [1, 2, 3, 4, 5, 6], "getforc": [1, 5, 9], "list": [1, 3, 4, 5, 6, 14], "1d": [1, 10], "np": [1, 3, 4, 5], "arrai": [1, 3, 4, 5, 16, 17], "A": [1, 2, 10, 11, 13], "nodal": [1, 3, 5, 6, 14, 17], "forc": [1, 3, 4, 5, 6, 17], "shall": [1, 4], "compon": [1, 3], "getstiff": [1, 2, 5, 9, 13], "2": [1, 2, 4, 5, 16], "matrix": 1, "contain": [1, 4, 5], "tangent": [1, 2, 13], "matric": 1, "note": [1, 3], "mai": 1, "have": [1, 3], "chang": 1, "state": [1, 2, 10, 13, 15, 16], "between": 1, "call": [1, 14], "so": [1, 3], "you": 1, "recomput": [1, 5], "everi": 1, "time": 1, "name": [1, 2, 3, 4, 5, 6], "type": [1, 2, 3, 4, 5, 6], "either": 1, "end": [1, 4, 16], "pointer": [1, 6], "comput": [1, 5, 6], "stress": [1, 2, 13, 15, 16], "modulu": [1, 2], "hold": [1, 2, 3, 5, 6], "p0": 1, "p1": 1, "kt": 1, "stiff": [1, 2, 5, 13], "all": [1, 2, 5, 6], "equat": [1, 2, 3, 5], "bf": [1, 3, 5, 11, 14], "l": 1, "x": [1, 3, 4, 14], "_1": [1, 3], "_0": [1, 3], "ell": 1, "n": [1, 10, 15, 16], "frac": [1, 2, 16], "1": [1, 2, 3, 5, 6, 10, 13, 14, 15, 16, 19], "strain": [1, 2, 10, 13, 15, 16], "varepsilon": [1, 2], "cdot": 1, "u": [1, 3, 4, 5, 6, 11, 14], "f": [1, 2, 5, 6, 14], "sigma": [1, 2, 13], "setstrain": [1, 2, 13, 15], "ep": [1, 2, 10, 13, 15, 16], "getstress": [1, 2, 13], "vector": [1, 3, 4, 5, 14, 17, 19], "p": [1, 5, 6, 11], "e": [1, 2, 10, 13, 15, 16], "k": [1, 5, 11], "e_t": [1, 2], "otim": 1, "find": 1, "_": [1, 5], "00": 1, "11": [1, 5], "01": 1, "10": [1, 2], "thi": [2, 3, 4, 5, 11, 18], "provid": [2, 3, 10, 13, 15, 16], "demonstr": 2, "exampl": 2, "paramet": [2, 10, 13, 14, 15, 16, 17, 19], "0": [2, 3, 5, 6, 10, 13, 14, 15, 16, 19], "set": [2, 3, 4, 5], "initi": [2, 3, 4, 14, 18], "intern": [2, 3, 17], "getarea": 2, "cross": 2, "section": 2, "area": 2, "from": [2, 5], "request": [2, 5, 6, 13, 14], "axial": [2, 10, 13, 15, 16], "updat": [2, 5, 6, 10, 13, 15, 16], "user": [2, 4, 10, 13, 15, 16], "valu": [2, 4, 10, 13, 15, 16], "param": [2, 10, 13, 14, 15, 16], "dict": 2, "default": [2, 3, 4], "100": 2, "nu": [2, 10, 13, 15, 16], "fy": [2, 10, 13, 15, 16], "0e30": 2, "moe": 2, "poisson": 2, "": [2, 5], "ratio": 2, "yield": 2, "plastic_strain": 2, "float": [2, 3], "sig": 2, "current": [2, 3], "et": [2, 13], "materil": 2, "elast": 2, "trial": 2, "varepsilon_p": 2, "check": 2, "f_y": 2, "IF": 2, "ge": 2, "3": 2, "delta": 2, "text": [2, 19], "sign": 2, "y": [3, 4, 14], "coordin": [3, 4], "point": [3, 4], "posit": [3, 4, 5, 6, 14], "displac": [3, 4, 5, 6, 14, 19], "zero": [3, 5], "fixdof": [3, 14], "idx": [3, 14], "degre": 3, "freedom": 3, "dof": [3, 7, 14, 21], "flag": 3, "accordingli": 3, "isfix": [3, 14], "true": [3, 17], "fals": [3, 4, 17], "test": 3, "function": [3, 18], "fix": [3, 5], "otherwis": 3, "setdisp": [3, 5, 14], "v": [3, 4, 5, 14], "overwrit": 3, "getdisp": [3, 14], "getpo": [3, 14], "getdeformedpo": [3, 14], "factor": [3, 5, 6, 14, 19], "magnifi": 3, "would": 3, "good": 3, "none": [3, 4, 14, 17], "given": [3, 4, 17], "addload": 3, "px": 3, "py": 3, "add": [3, 4, 5, 6, 17], "setload": 3, "replac": [3, 4], "getload": [3, 5], "po": 3, "index": [3, 5, 21], "int": 3, "addnod": [3, 5, 6, 19], "thisnod": 3, "team": 3, "disp": [3, 4, 5, 17], "fixiti": 3, "th": 3, "sensibl": 4, "setmesh": [4, 17], "vert": [4, 17], "line": [4, 17], "indic": [4, 5, 17], "self": 4, "vertic": 4, "inform": 4, "setdisplac": [4, 17], "setvalu": [4, 17], "val": [4, 17], "displacementplot": [4, 17], "file": [4, 17], "string": 4, "show": 4, "black": 4, "model": [4, 5, 6, 19], "red": 4, "If": [4, 5, 17], "save": 4, "copi": 4, "valueplot": [4, 17], "color": [4, 17], "colormap": 4, "colorbar": 4, "legend": 4, "pair": 4, "start": 4, "respect": 4, "must": 4, "ident": 4, "entri": 4, "newnod": [5, 6, 19], "your": [5, 6], "addel": [5, 6, 19], "newelem": [5, 6], "solv": [5, 6, 18, 19], "assembl": [5, 6, 18], "k_t": [5, 6], "loop": [5, 6], "through": [5, 6], "unbalanc": [5, 6], "r": [5, 6, 17], "collect": [5, 6], "info": [5, 6], "send": [5, 6, 14], "report": [5, 6, 19], "print": [5, 6, 19], "summari": [5, 6, 19], "size": 5, "ha": 5, "node0": [5, 12], "elem": 5, "node1": [5, 12], "j": 5, "local": 5, "d": 5, "o": 5, "belong": 5, "global": 5, "4": 5, "m": 5, "assembli": 5, "sy": 5, "over": 5, "should": 5, "0e20": 5, "step": 5, "5": 5, "6": 5, "do": 5, "repeat": 5, "7": 5, "everyth": 5, "wa": 5, "done": 5, "correctli": 5, "support": 5, "reaction": 5, "free": 5, "numer": 5, "class": [7, 21], "deriv": 7, "lineartriangl": [7, 9], "fibermateri": [7, 13], "planestress": [7, 13], "planestrain": [7, 13], "linear": [7, 18], "abstract": [9, 13, 18], "singl": [9, 12, 14, 20], "gener": [9, 13, 18], "getaxialforc": [9, 20], "updatest": [9, 10, 12, 16, 20], "1e": [10, 13, 15, 16], "30": [10, 13, 15, 16], "fiber": 10, "tensor": [10, 13, 15, 16], "linearsolv": 11, "impli": 11, "node2": 12, "domain": [14, 19], "magnif": [14, 19], "t": [15, 16], "plane": [15, 16], "addforc": 17, "ax": 17, "shown": 17, "axi": [14, 17], "which": 17, "store": 17, "proper": 17, "extens": 17, "desir": 17, "format": 17, "png": 17, "pdf": 17, "filenam": 17, "str": 17, "setreact": 17, "identifi": 17, "magnitud": 17, "defin": 18, "interfac": 18, "ani": 18, "implement": [18, 21], "describ": 18, "reset": [18, 19], "newel": 19, "resetal": 19, "resetdisp": 19, "resetload": 19, "nodei": 20, "nodej": 20, "program": 21, "design": 21, "modul": 21, "search": 21, "page": 21, "left": 16, "egin": [], "c": 16, "s_": 16, "xx": 16, "yy": 16, "xy": 16, "ight": [], "rac": [], "ccc": 16, "e_": 16, "begin": 16, "right": 16, "2e_": 16, "dof_list": 14, "code": 14, "common": 14, "ux": 14, "direct": 14, "ui": 14, "uz": 14, "z": 14, "rx": 14, "rotat": 14, "about": 14, "ry": 14, "rz": 14, "requir": 14}, "objects": {"domain": [[14, 0, 0, "-", "Node"], [19, 0, 0, "-", "System"]], "domain.Node": [[14, 1, 1, "", "Node"]], "domain.Node.Node": [[14, 2, 1, "", "fixDOF"], [14, 2, 1, "", "getDeformedPos"], [14, 2, 1, "", "getDisp"], [14, 2, 1, "", "getPos"], [14, 2, 1, "", "isFixed"], [14, 2, 1, "", "request"], [14, 2, 1, "", "setDisp"]], "domain.System": [[19, 1, 1, "", "System"]], "domain.System.System": [[19, 2, 1, "", "addElement"], [19, 2, 1, "", "addNode"], [19, 2, 1, "", "plot"], [19, 2, 1, "", "report"], [19, 2, 1, "", "resetAll"], [19, 2, 1, "", "resetDisp"], [19, 2, 1, "", "resetLoad"], [19, 2, 1, "", "solve"]], "elements": [[9, 0, 0, "-", "Element"], [12, 0, 0, "-", "LinearTriangle"], [20, 0, 0, "-", "Truss"]], "elements.Element": [[9, 1, 1, "", "Element"]], "elements.Element.Element": [[9, 2, 1, "", "getAxialForce"], [9, 2, 1, "", "getForce"], [9, 2, 1, "", "getStiffness"], [9, 2, 1, "", "updateState"]], "elements.LinearTriangle": [[12, 1, 1, "", "LinearTriangle"]], "elements.LinearTriangle.LinearTriangle": [[12, 2, 1, "", "updateState"]], "elements.Truss": [[20, 1, 1, "", "Truss"]], "elements.Truss.Truss": [[20, 2, 1, "", "getAxialForce"], [20, 2, 1, "", "updateState"]], "materials": [[10, 0, 0, "-", "FiberMaterial"], [13, 0, 0, "-", "Material"], [15, 0, 0, "-", "PlaneStrain"], [16, 0, 0, "-", "PlaneStress"]], "materials.FiberMaterial": [[10, 1, 1, "", "FiberMaterial"]], "materials.FiberMaterial.FiberMaterial": [[10, 2, 1, "", "updateState"]], "materials.Material": [[13, 1, 1, "", "Material"]], "materials.Material.Material": [[13, 2, 1, "", "getStiffness"], [13, 2, 1, "", "getStress"], [13, 2, 1, "", "setStrain"]], "materials.PlaneStrain": [[15, 1, 1, "", "PlaneStrain"]], "materials.PlaneStrain.PlaneStrain": [[15, 2, 1, "", "setStrain"]], "materials.PlaneStress": [[16, 1, 1, "", "PlaneStress"]], "materials.PlaneStress.PlaneStress": [[16, 2, 1, "", "updateState"]], "plotter": [[17, 0, 0, "-", "Plotter"]], "plotter.Plotter": [[17, 1, 1, "", "Plotter"]], "plotter.Plotter.Plotter": [[17, 2, 1, "", "addForces"], [17, 2, 1, "", "displacementPlot"], [17, 2, 1, "", "setDisplacements"], [17, 2, 1, "", "setMesh"], [17, 2, 1, "", "setReactions"], [17, 2, 1, "", "setValues"], [17, 2, 1, "", "valuePlot"]], "solver": [[11, 0, 0, "-", "LinearSolver"], [18, 0, 0, "-", "Solver"]], "solver.LinearSolver": [[11, 1, 1, "", "LinearSolver"]], "solver.Solver": [[18, 1, 1, "", "Solver"]], "solver.Solver.Solver": [[18, 2, 1, "", "assemble"], [18, 2, 1, "", "initialize"], [18, 2, 1, "", "reset"], [18, 2, 1, "", "solve"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"]}, "titleterms": {"program": 0, "design": 0, "element": [1, 2, 9], "class": [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "method": [1, 2, 3, 4, 5, 6], "variabl": [1, 2, 3, 4, 5, 6], "materi": [2, 10, 13, 15, 16], "node": [3, 14], "plotter": [4, 17], "solver": [5, 11, 18], "system": [5, 6, 19], "implement": 7, "deriv": [9, 13, 18], "fibermateri": 10, "parent": [10, 11, 12, 15, 16, 20], "doc": [10, 11, 12, 15, 16, 20], "linear": 11, "lineartriangl": 12, "planestrain": 15, "planestress": 16, "truss": 20, "welcom": 21, "fem": 21, "edu": 21, "document": 21, "content": 21, "indic": 21, "tabl": 21, "dof": 8}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})