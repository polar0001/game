const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.TiledBg,
		C3.Behaviors.Flash,
		C3.Plugins.Text,
		C3.Plugins.Keyboard,
		C3.Behaviors.Sin,
		C3.Behaviors.Bullet,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Behaviors.Platform.Acts.FallThrough,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Behaviors.solid.Acts.SetEnabled
	];
};
self.C3_JsPropNameTable = [
	{lava: 0},
	{Plataforma: 0},
	{Plataforma2: 0},
	{Sprite: 0},
	{texto: 0},
	{Sólido: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{PlanoDeFundoEmBlocos: 0},
	{Sprite4: 0},
	{Piscar: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Sprite11: 0},
	{images: 0},
	{images2: 0},
	{Texto: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{Sprite14: 0},
	{coração: 0},
	{Teclado: 0},
	{Sprite15: 0},
	{Sprite16: 0},
	{Sprite17: 0},
	{Sprite18: 0},
	{Texto2: 0},
	{Sprite19: 0},
	{Sprite20: 0},
	{Sprite21: 0},
	{Sprite23: 0},
	{Senóide: 0},
	{Sprite24: 0},
	{Sprite25: 0},
	{Sprite26: 0},
	{Projétil: 0},
	{Sprite5: 0},
	{Sprite22: 0},
	{moeda: 0},
	{Marreta: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	images: class extends self.ISpriteInstance {},
	images2: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	coração: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Sprite18: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	Sprite19: class extends self.ISpriteInstance {},
	Sprite20: class extends self.ISpriteInstance {},
	Sprite21: class extends self.ISpriteInstance {},
	Sprite23: class extends self.ISpriteInstance {},
	Sprite24: class extends self.ISpriteInstance {},
	Sprite25: class extends self.ISpriteInstance {},
	Sprite26: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite22: class extends self.ISpriteInstance {}
}