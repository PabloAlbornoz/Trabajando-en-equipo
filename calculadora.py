class Animal:
	def __init__(self,peso,altura,color,alimentacion,desplazamiento):
		self.peso=peso
		self.altura=altura
		self.color=color
		self.alimentacion=alimentacion
		self.desplazamiento=desplazamiento
		
	def getPeso(self):
		return self.__peso
	
	def getAltura(self):
		return self.altura
	
	def getAlimentacion(self):
		return self.alimentacion
	
	def getDesplazamiento(self):
		return self.desplazamiento
		
	                                 
		
	
	
class Perro(Animal):
	def __init__(self,peso,altura,color,alimentacion,desplazamiento,raza,edad,nombre,sexo):
		Animal.__init__(self,peso,altura,color,alimentacion,desplazamiento)
		self.raza=raza
		self.edad=edad
		self.nombre=nombre
		self.sexo=sexo
		
	def getRaza(self):
		return self.raza
		
	def getNombre(self):
		return self.nombre	


mi_perro = Perro("5 kilos", "60 centimetros", " blanco","omnivoro","cuadrupedo","callejero","12 anios","betina","hembra")

print "mi perro se llama " + mi_perro.getNombre()
