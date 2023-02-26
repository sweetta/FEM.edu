import numpy as np
import matplotlib.pyplot as plt
from matplotlib.collections import LineCollection
from matplotlib.colors import ListedColormap, BoundaryNorm
import sys

from .AbstractPlotter import *
from ..elements.Element import Element

class ElementPlotter(AbstractPlotter):
    """
    A plotter class that takes a list of nodes and elements from a finite element model
    and plots a deformed mesh, potentially shaded based on a value of a user-specified state
    variable.

    The information needed for plotting is obtained through standardized element functions.
    Default versions of those functions are implemented through the Element-class, but respective
    methods may be overloaded by user-implemented elements.
    """

    def __init__(self):
        super(ElementPlotter, self).__init__()

    def setReactions(self, R):
        """

        :param R: array of nodal force vectors
        """
        self.reactions = np.array(R)

    def displacementPlot(self, factor=1.0, file=None):
        """
        Create a deformed system plot

        If **file** is given, store the plot to that file.
        Use proper file extensions to indicate the desired format (.png, .pdf)

        :param factor: displacement scaling factor
        :param file: filename (str)
        """

        if self.plot3D:
            fig = plt.figure(figsize=(10, 10))
            axs = fig.gca(projection='3d')

            # plot the undeformed elements
            for elem in self.elements:
                ans = elem.draw(factor=0.0)
                if len(ans)>=3:
                    x = ans[0]
                    y = ans[1]
                    z = ans[2]
                    if x.size == y.size and x.size == z.size:
                        axs.plot(x, y, z, '-k', lw=2)

            # plot the deformed elements
            if factor:
                for elem in self.elements:
                    ans = elem.draw(factor=factor)
                    if len(ans)>=3:
                        x = ans[0]
                        y = ans[1]
                        z = ans[2]
                        if x.size == y.size and x.size == z.size:
                            axs.plot(x, y, z, '-r', lw=3)

            if self.reactions:
                self.addForces(axs)

            self.set_axes_equal(axs)

        else:
            fig, axs = plt.subplots()

            # plot the undeformed elements
            for elem in self.elements:
                ans = elem.draw(factor=0.0)
                if len(ans)>=2:
                    x = ans[0]
                    y = ans[1]
                    if x.size == y.size:
                        axs.plot(x, y, '-k', lw=2)

            # plot the deformed elements
            if factor:
                for elem in self.elements:
                    ans = elem.draw(factor=factor)
                    if len(ans)>=2:
                        x = ans[0]
                        y = ans[1]
                        if x.size == y.size:
                            axs.plot(x, y, '-r', lw=3)

            # if self.reactions != []:
            #     self.addForces(axs)

            axs.set_aspect('equal')
            axs.set_xmargin(0.10)
            axs.set_ymargin(0.10)
            axs.set_axis_off()

        plt.show()

    def valuePlot(self, variable_name='', factor=0.0, file=None):
        """
        Create a plot using colors to identify magnitude of internal force.

        If **file** is given, store the plot to that file.
        Use proper file extensions to indicate the desired format (.png, .pdf)

        :param factor: True | **False**
        :param file: filename (str)
        """
        print("** WARNING ** {}.{} not implemented".format(self.__class__.__name__, sys._getframe().f_code.co_name))
        return

        fig, axs = plt.subplots()

        # plot the lines
        segments = []

        if len(self.disp) == len(self.vertices):
            for line in self.lines:
                vert0 = self.vertices[line[0]].copy()  # we need a copy since we will be modifying this in the lines below
                vert1 = self.vertices[line[1]].copy()  # we need a copy since we will be modifying this in the lines below
                if deformed:
                    vert0 += self.disp[line[0]]   # it's this += that modifies the vertices if we don't use a copy
                    vert1 += self.disp[line[1]]   # it's this += that modifies the vertices if we don't use a copy
                #x = [vert0[0], vert1[0]]
                #y = [vert0[1], vert1[1]]
                #axis.plot(x,y,'-r',lw=3)
                segments.append(np.array([vert0, vert1]))

        # Create a continuous norm to map from data points to colors
        lc = LineCollection(np.array(segments), cmap='rainbow')
        # Set the values used for colormapping
        lc.set_array(self.values)
        lc.set_linewidth(3)
        line = axs.add_collection(lc)
        fig.colorbar(line, ax=axs)

        if self.reactions != []:
            self.addForces(axs)

        axs.set_aspect('equal')
        axs.set_axis_off()

        plt.autoscale(enable=True, axis='x', tight=False)
        plt.autoscale(enable=True, axis='y', tight=False)
        plt.show()

    def beamValuePlot(self, variable_name='', factor=0.0, file=None):
        """
        Create a deformed system plot

        If **file** is given, store the plot to that file.
        Use proper file extensions to indicate the desired format (.png, .pdf)

        :param variable_name: string code for variable
        :param factor: displacement scaling factor
        :param file: filename (str)
        """
        if not variable_name:
            print("No plotable variable defined")
            return

        if self.plot3D:
            raise NotImplementedError

            fig = plt.figure(figsize=(10, 10))
            axs = fig.gca(projection='3d')
            self.set_axes_equal(axs)

        else:
            fig, axs = plt.subplots()

            minX =  1.e20
            maxX = -1.e20
            minY =  1.e20
            maxY = -1.e20
            minV =  0.000
            maxV =  0.000

            # Find dimensions for scaling
            for elem in self.elements:
                ans = elem.draw(factor=0.0)
                if len(ans)>=2:
                    x = ans[0]
                    y = ans[1]
                    if x.size == y.size:
                        minX = np.min([minX, np.min(x)])
                        maxX = np.max([maxX, np.max(x)])
                        minY = np.min([minY, np.min(y)])
                        maxY = np.max([maxY, np.max(y)])
                (xsi, vals) = elem.getInternalForce(variable_name)
                if xsi.size != 0 and vals.size != 0:
                    minV = np.min([minV, np.min(vals)])
                    maxV = np.max([maxV, np.max(vals)])

            # scaling factors
            if np.isclose(minX,maxX):
                maxX += 0.5
                minX -= 0.5
            if np.isclose(minY,maxY):
                maxY += 0.5
                minY -= 0.5
            if np.isclose(minV,maxV):
                maxV += 0.5
                minV -= 0.5

            Lx = maxX - minX
            Ly = maxY - minY
            Lv = maxV - minV

            scale = 0.100 * np.max([Lx,Ly]) / Lv

            # plot the elements
            for elem in self.elements:
                ans = elem.draw(factor=0.0)
                if len(ans)>=2:
                    x = ans[0]
                    y = ans[1]

                    if x.size == y.size and x.size>1:
                        xi = np.array([x[0],y[0]])
                        xj = np.array([x[-1],y[-1]])
                        lvec = xj - xi
                        ell  = np.linalg.norm(lvec)
                        nvec = lvec / ell
                        svec = np.array( [ -nvec[1], nvec[0] ] )

                        # variable plot
                        if elem.isType(Element.LINE) or elem.isType(Element.CURVE):
                            (xsi, vals) = elem.getInternalForce(variable_name)
                            if xsi.size > 0 and vals.size > 0:
                                vals *= scale

                                xv = xi + np.outer(xsi, lvec)
                                vv = xv + np.outer(vals, svec)

                                axs.plot(vv[:,0], vv[:,1], '-g', lw=1)
                                self._arrow(axs, xv[0,0], xv[0,1], vv[0,0]- xv[0,0], vv[0,1]- xv[0,1], vals[0])
                                self._arrow(axs,xv[-1,0],xv[-1,1],vv[-1,0]-xv[-1,0],vv[-1,1]-xv[-1,1],vals[-1])

                        # plot system on top (!)
                        axs.plot(x, y, '-k', lw=2)

            # if self.reactions != []:
            #     self.addForces(axs)

            if variable_name.lower() == 'm' or variable_name.lower() == 'mz':
                # bending moment (in plane)
                axs.set_title('Bending Moment')
            elif variable_name.lower() == 't' or variable_name.lower() == 'mx':
                # bending moment (in plane)
                axs.set_title('Torque')
            elif variable_name.lower() == 'f' or variable_name.lower() == 'fx':
                # axial force
                axs.set_title('Axial Forces')
            elif variable_name.lower() == 'v' or variable_name.lower() == 'vy':
                # transverse shear (in-plane)
                axs.set_title('Shear Forces')
            else:
                # unknown force
                axs.set_title(f'{variable_name} Forces')

            axs.set_aspect('equal')
            axs.set_xmargin(0.10)
            axs.set_ymargin(0.10)
            axs.set_axis_off()

        plt.show()

    def _arrow(self,axs,x,y,dx,dy,val):
        headWidth  = np.abs(val) * 0.20
        headLength = np.abs(val) * 0.50
        if val >= 0.0:
            fc = 'r'
            axs.arrow(x,y,dx,dy, fc=fc, ec=fc, lw=1,
                      length_includes_head=True,
                      head_width=headWidth, head_length=headLength)
        else:
            fc = 'b'
            axs.arrow(x+dx,y+dy,-dx,-dy, fc=fc, ec=fc, lw=1,
                      length_includes_head=True,
                      head_width=headWidth, head_length=headLength)

    def addForces(self, axs):
        """
        add nodal forces to the plot shown in **axs**

        :param axs: axis on which to plot
        """
        print("** WARNING ** {}.{} not implemented".format(self.__class__.__name__, sys._getframe().f_code.co_name))
        return


        if len(self.reactions) == len(self.vertices):
            Fx = []
            Fy = []
            X = []
            Y = []
            for (point, force) in zip(self.vertices, self.reactions):
                if np.linalg.norm(force) > 1.0e-3:
                    X.append(point[0])
                    Y.append(point[1])
                    Fx.append(-force[0])
                    Fy.append(-force[1])

            axs.quiver(X,Y, Fx, Fy, color='green')


